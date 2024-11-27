# DDD (Domain-drive Design)
Design dirigido à domínio
## Domínio
- Domain Experts
  - Conversa
- Linguagem ubíqua
- Usuário
  - Client
  - Fornecedor
  - Atendente
  - Barman
- Agregados (duas ou mais entidades manipuladas simultaneamente)
- Value Objects => propriedades que possuem regras de negócio associadas (formatações, validações etc, ex: slug da question)
- Eventos de domínio
- Subdomínios (Bounded Contexts)
  - Core
  - Supporting
  - Generic
- Entidades
- Casos de uso

--pub(lish)/sub(scribe)

domain events

CONCEITOS A SEREM REVISADOS:
WATCHED LIST -> lista observada, auxilia na edição para aggregates
PUB/SUB
AGGREGATE -> conjunto de entidades trabalhadas juntas ao mesmo tempo. Eu posso manipular classes que se relacionam em conjunto.