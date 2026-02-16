# Desafio: Frete em um Experimento de Envio

## Historia
Uma plataforma de entregas acabou de liberar um novo recurso de envio e o time de produto quer conduzir um experimento A/B para entender o impacto de diferentes regras de frete. O checkout precisa continuar simples para o cliente, mas por tras o sistema deve escolher a regra correta para cada pedido conforme o grupo do teste.

O time planeja alternar regras com frequencia: ativar ou desativar um tipo de envio, ajustar parametros e ate adicionar novas variacoes. O fluxo principal nao pode ser alterado a cada mudanca, e o calculo precisa permanecer consistente para o mesmo pedido quando a regra muda.

Sua tarefa e propor uma solucao que permita testar essas variacoes sem quebrar o fluxo existente, garantindo que o valor final do frete mude conforme a regra aplicada, mas sem exigir mudancas no codigo que orquestra o checkout.

## Anexos

### Calculos de frete
Use as variaveis: distancia_km, peso_kg, valor_pedido.

- Economico: 5.00 + (0.80 * distancia_km) + (0.30 * peso_kg)
- Expresso: 8.00 + (1.30 * distancia_km) + (0.50 * peso_kg)
- Agendado: 6.00 + (0.90 * distancia_km) + (0.40 * peso_kg) + (0.02 * valor_pedido)
