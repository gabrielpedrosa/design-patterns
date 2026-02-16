# Design Patterns

## Historia-problema: Strategy

Voce trabalha em uma plataforma de entregas que acabou de lançar um novo recurso de envio. O time de produto quer testar tres estrategias de calculo de frete: economico, expresso e agendado. Cada estrategia tem regras diferentes, mas a API do checkout precisa continuar a mesma para todos os testes.

### Contexto do teste

Durante um experimento A/B, o sistema deve escolher a estrategia correta para cada pedido sem alterar o codigo do fluxo principal. A qualquer momento o time pode ativar ou desativar uma estrategia, trocar as regras ou adicionar outra nova.

### Tarefa

Escreva um componente de calculo de frete que aceite uma estrategia e retorne o valor final. O teste deve simular a troca dinamica de estrategia para o mesmo pedido e verificar se o resultado muda conforme esperado.

### Calculos por estrategia

Use as variaveis: distancia_km, peso_kg, valor_pedido.

- Economico: 5.00 + (0.80 * distancia_km) + (0.30 * peso_kg)
- Expresso: 8.00 + (1.30 * distancia_km) + (0.50 * peso_kg)
- Agendado: 6.00 + (0.90 * distancia_km) + (0.40 * peso_kg) + (0.02 * valor_pedido)