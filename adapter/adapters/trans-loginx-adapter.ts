import {
  DeliveryPriceInput,
  IDeliveryPriceInput,
} from "./delivery-price-input";

export class TransLoginxAdapter implements IDeliveryPriceInput {
  /**
   * TransLoginxAdapter adapts the input data from TransLoginx format to the standard DeliveryPriceInput format.
   * @param distance - distance in miles
   * @param weight  - weight in kilograms
   * @param orderPrice - total price of the order in R$
   */
  constructor(
    private distance: number,
    private weight: number,
    private orderPrice: number,
  ) {}
  getDeliveryPriceInput(): DeliveryPriceInput {
    
    return {
      distance: this.distance * 1.60934, // Convert miles to kilometers
      weight: this.weight,
      orderPrice: this.orderPrice,
      type: "trans-loginx",
    };
  }
}
