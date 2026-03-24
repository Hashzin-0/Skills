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
└── utilitarios/     # Ferramentas diversas
```

## Hierarquia de Domínios

Cada categoria técnica pode conter subpastas para domínios específicos:

- **core/**: Skills genéricas que servem para qualquer tipo de código
- **financas/**: Domínio de finanças (exemplo)
- **redes-sociais/**: Domínio de redes sociais (exemplo)
- **video/**: Domínio de vídeo (exemplo)
- **audio/**: Domínio de áudio (exemplo)

### Exemplo de Expansão

```
seguranca/
├── core/           # skills genéricas
├── financas/       # skills específicas para finanças
│   ├── seguranca-financeira.md
│   └── validacao-pix.md
└── redes-sociais/ # skills específicas para redes sociais
    └── moderacao-conteudo.md
```

## Como Usar

As skills são indexadas pelo MCP `github-registry-mcp`. Use as tools:

- `registry_search` - Buscar skills por nome, tags ou descrição
- `registry_list` - Listar todas as skills com grouping opcional
- `registry_get_index` - Obter o index.json completo

## Adicionar Nova Skill

1. Colocar a skill na pasta da categoria correspondente
2. Usar a tool `registry_save` do MCP para adicionar ao índice

## Categories

| Categoria | Qtd | Descrição |
|-----------|-----|-----------|
| orquestracao | 3 | Coordenar tasks complexas e multi-domínio |
| criacao | 4 | Criar skills, código, ferramentas, MCPs |
| qualidade | 3 | Revisão de código e validação |
| seguranca | 4 | Proteção e testes de segurança |
| arquitetura | 5 | Estrutura, padrões e design system |
| dados | 2 | Acesso a dados e resiliência |
| codificacao | 6 | Boas práticas de código |
| utilitarios | 7 | Ferramentas diversas |

**Total: 34 skills core**