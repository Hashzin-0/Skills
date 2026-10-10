import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const manifestPath = path.join(root, "plugins", "skills-manifest.json");
const indexPath = path.join(root, "index.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const index = JSON.parse(fs.readFileSync(indexPath, "utf8"));

if (manifest.schemaVersion !== 1 || !Array.isArray(manifest.groups)) {
  throw new Error("Unsupported or malformed skills manifest");
}
if (index.type !== "skills" || !Array.isArray(index.categories)) {
  throw new Error("Malformed root skills index");
}

const indexed = new Map();
for (const category of index.categories) {
  for (const skill of category.skills ?? []) {
    const entries = indexed.get(skill.name) ?? [];
    entries.push(skill);
    indexed.set(skill.name, entries);
  }
}

const seenNames = new Set();
const seenPaths = new Set();
let count = 0;
for (const group of manifest.groups) {
  if (!group.id || !Array.isArray(group.skills)) throw new Error("Malformed manifest group");
  for (const skill of group.skills) {
    count += 1;
    if (!skill.name || !skill.path || !skill.source || !skill.when) {
      throw new Error(`Incomplete manifest entry in group ${group.id}`);
    }
    if (seenNames.has(skill.name)) throw new Error(`Duplicate manifest skill name: ${skill.name}`);
    if (seenPaths.has(skill.path)) throw new Error(`Duplicate manifest path: ${skill.path}`);
    seenNames.add(skill.name);
    seenPaths.add(skill.path);
    const fullPath = path.resolve(root, skill.path);
    if (!fullPath.startsWith(root + path.sep)) throw new Error(`Path escapes repository: ${skill.path}`);
    if (!fs.existsSync(fullPath) || !fs.statSync(fullPath).isFile()) {
      throw new Error(`Manifest skill file not found: ${skill.path}`);
    }
    const indexedEntries = indexed.get(skill.name) ?? [];
    if (!indexedEntries.some(entry => entry.path === skill.path)) {
      throw new Error(`Skill/path missing from index.json: ${skill.name} (${skill.path})`);
    }
    const content = fs.readFileSync(fullPath, "utf8");
    if (!content.trim() || !/^---\s*\n[\s\S]*?\n---\s*\n/.test(content)) {
      throw new Error(`Skill is empty or lacks frontmatter: ${skill.path}`);
    }
  }
}

console.log(`Validated ${count} manifest skills across ${manifest.groups.length} groups; all files exist and match index.json.`);
