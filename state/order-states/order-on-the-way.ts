import { IOrderState } from ".";
import { IOrder } from "../order";
import { OrderDelivered } from "./order-delivered";
import { PreparingOrder } from "./preparing-order";

export class OrderOnTheWay implements IOrderState {
    status = "Pedido a caminho";
    prepare(order: IOrder): void {
        throw new Error("Order is already on the way.");
    }
    dispatch(order: IOrder): void {
        throw new Error("Order is already on the way.");
    }
    deliver(order: IOrder): void {
        order.setState(new OrderDelivered());
    }
    cancel(order: IOrder): void {
        throw new Error("Order cannot be canceled while on the way.");
    }
    revert(order: IOrder): void {
        order.setState(new PreparingOrder());
    }
    
}