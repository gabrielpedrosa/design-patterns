import { IOrderState } from ".";
import { IOrder } from "../order";
import { OrderCanceled } from "./order-canceled";
import { OrderOnTheWay } from "./order-on-the-way";
import { OrderPlaced } from "./order-placed";

export class PreparingOrder implements IOrderState {
  status = "Pedido em preparação";
  prepare(order: IOrder): void {
    throw new Error("Order is already being prepared.");
  }
  dispatch(order: IOrder): void {
    order.setState(new OrderOnTheWay());
  }
  deliver(order: IOrder): void {
    throw new Error("Order must be dispatched before delivery.");
  }
  cancel(order: IOrder): void {
    order.setState(new OrderCanceled());
  }
  revert(order: IOrder): void {
    order.setState(new OrderPlaced());
  }
}
