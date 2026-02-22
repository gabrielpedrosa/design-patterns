import { IOrderState } from ".";
import { IOrder } from "../order";
import { OrderCanceled } from "./order-canceled";
import { OrderOnTheWay } from "./order-on-the-way";
import { PreparingOrder } from "./preparing-order";

export class OrderPlaced implements IOrderState {
  status = "Pedido realizado";
  prepare(order: IOrder): void {
    order.setState(new PreparingOrder());
  }
  dispatch(order: IOrder): void {
    throw new Error("Order must be prepared before dispatching.");
  }
  deliver(order: IOrder): void {
    throw new Error("Order must be prepared before delivery.");
  }
  cancel(order: IOrder): void {
    order.setState(new OrderCanceled());
  }
  revert(order: IOrder): void {
    order.setState(new OrderCanceled());
  }
}
