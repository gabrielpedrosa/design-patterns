import {
  DeliveryPriceInput,
  IDeliveryPriceInput,
} from "./delivery-price-input";

export class SouthExpressAdapter implements IDeliveryPriceInput {
    private distance: number; // Distance in libras 
    private weight: number; // Weight in kilograms
    private orderPrice: number; // Total price of the order in R$

    constructor(json: Record<string, any>) {
        this.distance = json.distancia;
        this.weight = json.peso;
        this.orderPrice = json.precoPedido;
    }

  getDeliveryPriceInput(): DeliveryPriceInput {
    return {
      distance: this.distance * 0.453592, // Convert libras to kilograms
      weight: this.weight,
      orderPrice: this.orderPrice,
      type: "south-express",
    };
  }
}
