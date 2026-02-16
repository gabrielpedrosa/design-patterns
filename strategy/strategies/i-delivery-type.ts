export interface IDelivery {
  calculate(distance: number, weight: number, orderPrice: number): number;
}
