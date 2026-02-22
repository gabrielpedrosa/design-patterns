# Desafio: Estado de Entrega no Acompanhamento

## Historia
A plataforma de entregas agora exibe uma linha do tempo no acompanhamento do pedido. O front-end envia eventos simples (por exemplo: "preparando", "a_caminho", "entregue", "cancelado") e a API precisa atualizar o estado do envio e responder o que esta permitido fazer em cada etapa.

O time quer evitar condicionais espalhadas e garantir que cada estado controle suas transicoes e comportamentos. Novos estados podem surgir (por exemplo: "atrasado"), e o restante do sistema nao deve conhecer os detalhes de cada estado.

Sua tarefa e propor uma solucao que modele os estados de envio, centralize as transicoes validas e permita delegar o comportamento para o estado atual sem alterar o codigo que consome essas mudancas.

## Anexos

### Regras de transicao
Os estados iniciais e eventos:

- Estado inicial: Preparando
- Eventos possiveis: preparar, despachar, entregar, cancelar, reverter

Transicoes:

- Preparando: despachar -> A Caminho, cancelar -> Cancelado
- A Caminho: entregar -> Entregue, cancelar -> Cancelado, reverter -> Preparando
- Entregue: reverter -> A Caminho
- Cancelado: reverter -> Preparando

### Comportamentos por estado
Cada estado deve responder:


Sugestao de mensagens:

- Preparando: "Pedido em separacao"
- A Caminho: "Pedido saiu para entrega"
- Entregue: "Pedido entregue"
- Cancelado: "Pedido cancelado"
