# Desafio: Integracao de Tabelas de Frete

## Historia
O checkout da plataforma agora precisa consultar precos de frete em sistemas legados de filiais. Cada filial possui um formato proprio de retorno: a TransLogix envia listas com campos em ingles, a PonteVerde retorna objetos com siglas internas e a SulExpress usa unidades diferentes.

O fluxo principal do checkout ja esta pronto e espera receber as variaveis distancia_km, peso_kg e valor_pedido para calcular o frete. Porém, a TransLogix retorna distancia em milhas, a SouthExpress usa peso em libras.

Sua tarefa e propor uma solucao que permita conectar esses retornos heterogeneos ao calculo atual, mantendo a interface esperada pelo checkout e evitando mudancas no codigo principal a cada nova integracao.

## Proposta de solucao (Adapter)
Padronize a entrada do calculo de frete com um contrato unico (por exemplo, `FreteInput` contendo distancia_km, peso_kg, valor_pedido e tipo_envio). Para cada sistema legado, crie um adaptador que receba o retorno original e o converta para esse contrato.

Exemplo de abordagem:

- Interface interna: `FreteInput` com unidades padronizadas (km, kg, moeda em reais).
- `TransLogixAdapter`: converte milhas para km e mapeia os campos em ingles.
- `SouthExpressAdapter`: converte libras para kg e traduz siglas internas.
- O checkout consome apenas `FreteInput` e ignora os detalhes de cada filial.

Assim, novas filiais entram como novos adaptadores sem alterar o fluxo principal.

## Anexos

### Calculos de frete
Use as variaveis: distancia_km, peso_kg, valor_pedido.

- Economico: 5.00 + (0.80 * distancia_km) + (0.30 * peso_kg)
- Expresso: 8.00 + (1.30 * distancia_km) + (0.50 * peso_kg)
- Agendado: 6.00 + (0.90 * distancia_km) + (0.40 * peso_kg) + (0.02 * valor_pedido)
