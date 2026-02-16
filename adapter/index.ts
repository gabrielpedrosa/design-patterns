import { SouthExpressAdapter } from "./adapters/south-express-adapter";
import { TransLoginxAdapter } from "./adapters/trans-loginx-adapter";

function main() {
  const transLoginxAdapter = new TransLoginxAdapter(10, 5, 100);
  const transLoginxInput = transLoginxAdapter.getDeliveryPriceInput();

  const southExpressAdapter = new SouthExpressAdapter({ distancia: 10, peso: 5, precoPedido: 100 });
  const southExpressInput = southExpressAdapter.getDeliveryPriceInput();

  console.log(transLoginxInput);
  console.log(southExpressInput);
}

main();