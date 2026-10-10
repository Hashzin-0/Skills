# Skills Registry

Repositório central de skills para o ecossistema opencode.

## Estrutura

```
skills/
├── orquestracao/     # Orquestração de tasks complexas
├── criacao/         # Criação e geração de código/artefatos
├── qualidade/       # Revisão, testes, validação
├── seguranca/       # Segurança e proteção
├── arquitetura/     # Estrutura e padrões
├── dados/           # Acesso a dados e APIs
├── codificacao/     # Práticas de código
├── backend/         # Desenvolvimento backend e servidor
├── frontend/        # Desenvolvimento frontend e interface
├── ui-ux/          # Design de interface e experiência
├── database/       # Banco de dados e persistência
├── devops/         # DevOps, infraestrutura e CI/CD
├── api/            # APIs, integrações e serviços web
└── utilitarios/     # Ferramentas diversas
```

## Hierarquia de Domínios

Cada categoria técnica contém subpastas para **27 domínios específicos**:

| Domínio | Domínio | Domínio |
|---------|---------|---------|
| financas | redes-sociais | video |
| audio | e-commerce | saude |
| educacao | iot | gaming |
| fintech | logistica | alimentacao |
| entretenimento | tecnologia | energia |
| agricultura | construcao | imoveis |
| turismo | seguros | marketing |
| recursos-humanos | juridico | governanca |
| automacao | varejo | manufactura |

### Como os Domínios Funcionam

- **Domínios vazios**: Cada pasta de domínio está vazia, pronta para receber skills específicas
- **Exemplo de expansão**:
  ```
  seguranca/
  ├── core/           # skills genéricas
  ├── financas/       # skills específicas para finanças
  │   ├── seguranca-financeira.md
  │   └── validacao-pix.md
  └── redes-sociais/  # skills específicas para redes sociais
      └── moderacao-conteudo.md
  ```

## Categorias

| Categoria | Qtd | Descrição |
|-----------|-----|-----------|
| orquestracao | 3 | Coordenar tasks complexas e multi-domínio |
| criacao | 4 | Criar skills, código, ferramentas, MCPs |
| qualidade | 3 | Revisão de código e validação |
| seguranca | 4 | Proteção e testes de segurança |
| arquitetura | 5 | Estrutura, padrões e design system |
| dados | 2 | Acesso a dados e resiliência |
| codificacao | 6 | Boas práticas de código |
| backend | 4 | Desenvolvimento backend |
| frontend | 4 | Desenvolvimento frontend |
| ui-ux | 2 | Design de interface |
| database | 2 | Banco de dados |
| devops | 2 | DevOps e infraestrutura |
| api | 2 | APIs e integrações |
| utilitarios | 7 | Ferramentas diversas |

**Total: 14 categorias técnicas + 27 domínios**

## Registro e validação automatizada

O arquivo `index.json` é o índice consumido pelo `github-registry-mcp`; `plugins/skills-manifest.json` agrupa as nove skills importadas para composição dos plugins. Ao adicionar ou mover uma skill referenciada pelo manifesto, atualize os dois arquivos.

Valide localmente com:

```bash
node scripts/validate-skills-manifest.mjs
```

O validador verifica a estrutura dos JSONs, a existência de cada arquivo listado no manifesto, o frontmatter das skills e a correspondência de nome/caminho entre o manifesto e `index.json`. O workflow `Validate Skills Registry` executa essa verificação em pull requests e pushes para `main`. Ele não publica nem atualiza plugins privados automaticamente.

## Como Usar

As skills são indexadas pelo MCP `github-registry-mcp`. Use as tools:

- `registry_search` - Buscar skills por nome, tags ou descrição
- `registry_list` - Listar todas as skills com grouping opcional
- `registry_get_index` - Obter o index.json completo

## Adicionar Nova Skill

### Para categoria core (genérica):
1. Colocar a skill na pasta da categoria correspondente
2. Usar a tool `registry_save` do MCP para adicionar ao índice

### Para domínio específico:
1. Criar a skill dentro da pasta do domínio (ex: `seguranca/financas/`)
2. Adicionar ao índice com path correto (ex: `seguranca/financas/minha-skill/SKILL.md`)

## Skills adicionadas: design, vídeo e ícones 3D

Esta atualização incorpora skills upstream com atribuição e links de origem. Elas são organizadas por função, sem impor stack ou instalar dependências automaticamente.

| Skill | Caminho no registry | Quando usar | Integração/plugin sugerido |
|---|---|---|---|
| Design Taste Frontend | `skills/frontend/ui-ux/design-taste-frontend/SKILL.md` | Landing pages, portfólios e interfaces de marketing novas | Plugin de Frontend/UI-UX |
| Redesign Existing Projects | `skills/frontend/ui-ux/redesign-existing-projects/SKILL.md` | Auditar e melhorar UI existente preservando arquitetura e comportamento | Plugin de Frontend/UI-UX e revisão de código |
| High-end Visual Design | `skills/frontend/ui-ux/high-end-visual-design/SKILL.md` | Direção visual premium quando o briefing pede esse estilo | Plugin de Frontend/UI-UX |
| GPT Taste | `skills/frontend/ui-ux/gpt-taste/SKILL.md` | Direção de frontend mais experimental e motion avançado; aplicar seletivamente | Plugin de Frontend/UI-UX / motion |
| Image to Code | `skills/frontend/ui-ux/image-to-code/SKILL.md` | Converter referências visuais em implementação após análise | Plugin de Frontend/UI-UX e geração de imagens |
| Full Output Enforcement | `skills/qualidade/core/full-output-enforcement/SKILL.md` | Evitar entregas incompletas, placeholders e omissões | Plugin de Qualidade/Code Review |
| Brag | `skills/utilitarios/video/brag/SKILL.md` | Planejar vídeo curto de lançamento com Hyperframes | Plugin de vídeo/marketing; requer ambiente e dependências upstream |
| Brag Slim | `skills/utilitarios/video/brag-slim/SKILL.md` | Alternativa enxuta para produzir vídeo de lançamento sem Hyperframes | Plugin de vídeo/marketing |
| 3D Icon | `skills/criacao/video/3dicon/SKILL.md` | Criar ícone 3D animado em WebP com transparência real | Plugin de geração de mídia/ícones; requer Python, FFmpeg e credenciais de provedor |

### Regras de composição dos plugins

- **Frontend/UI-UX:** carregar Design Taste como orientação geral; selecionar Redesign para bases existentes, Image to Code para fluxo com referência visual, High-end Visual Design apenas quando o briefing justificar e GPT Taste apenas se o usuário aceitar uma direção experimental/motion-heavy. Não combinar automaticamente todas as direções visuais em uma única tarefa.
- **Qualidade:** usar Full Output Enforcement como verificação de completude, subordinada às regras locais, ao escopo e aos limites técnicos.
- **Vídeo:** escolher Brag ou Brag Slim por execução e requisitos; não executar ambos por padrão. Brag depende do workflow Hyperframes; Brag Slim exige ferramentas locais de renderização.
- **Ícones 3D:** exigir aprovação explícita da imagem estática antes de animar e confirmação antes de etapas que gerem custos. Não afirmar que a skill por si só instala credenciais, executa a pipeline ou gera os arquivos.
- **Conflitos:** as regras locais do projeto e os requisitos de acessibilidade, segurança, dependências e preservação funcional prevalecem sobre preferências estéticas genéricas.

### Proveniência e licenças

- Brag: [latent-spaces/brag](https://github.com/latent-spaces/brag), licença MIT.
- Taste Skill e variantes: [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill), licença MIT.
- 3D Icon: [samyost1/3dicon](https://github.com/samyost1/3dicon), licença MIT.

Os arquivos foram importados como skills de instrução. A skill 3D Icon não inclui automaticamente todo o runtime Python, assets, modelos de matting, chaves ou binários do projeto upstream; siga o README de origem para configurar a pipeline real.
