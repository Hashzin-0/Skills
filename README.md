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