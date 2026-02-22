import { IOrderState } from ".";
import { IOrder } from "../order";
import { PreparingOrder } from "./preparing-order";

export class OrderCanceled implements IOrderState {
  status = "Pedido cancelado";
  prepare(order: IOrder): void {
    order.setState(new PreparingOrder());
  }
  dispatch(order: IOrder): void {
    throw new Error("Order is already canceled.");
  }
  deliver(order: IOrder): void {
    throw new Error("Order is already canceled.");
  }
  cancel(order: IOrder): void {
    throw new Error("Order is already canceled.");
  }
  revert(order: IOrder): void {
    throw new Error("Order is already canceled.");
  }
}
