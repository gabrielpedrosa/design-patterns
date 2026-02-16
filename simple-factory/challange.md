# Desafio: Criacao de Envio no Checkout

## Historia
A mesma plataforma de entregas expandiu o checkout para oferecer diferentes tipos de envio. Agora, a API precisa instanciar a opcao correta de envio a partir de um codigo simples recebido do front-end (por exemplo: "economico", "expresso", "agendado").

O time quer manter o ponto de entrada do checkout enxuto e sem condicionais espalhadas. Novas opcoes de envio devem poder ser adicionadas com facilidade, e o restante do sistema nao deve precisar saber detalhes de cada tipo. Para o experimento A/B continuar, o fluxo deve criar o tipo certo e delegar o calculo do frete para a instancia criada.

Sua tarefa e propor uma solucao que centralize a criacao dos tipos de envio e permita trocar ou adicionar novas opcoes sem alterar o codigo que consome essa criacao.

## Anexos

### Calculos de frete
Use as variaveis: distancia_km, peso_kg, valor_pedido.

- Economico: 5.00 + (0.80 * distancia_km) + (0.30 * peso_kg)
- Expresso: 8.00 + (1.30 * distancia_km) + (0.50 * peso_kg)
- Agendado: 6.00 + (0.90 * distancia_km) + (0.40 * peso_kg) + (0.02 * valor_pedido)
