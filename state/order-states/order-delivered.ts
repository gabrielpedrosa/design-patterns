import { IOrderState } from ".";
import { IOrder } from "../order";

export class OrderDelivered implements IOrderState {
    status = "Pedido entregue";
    prepare(order: IOrder): void {
        throw new Error("Order has already been delivered.");
    }
    dispatch(order: IOrder): void {
        throw new Error("Order has already been delivered.");
    }
    deliver(order: IOrder): void {
        throw new Error("Order has already been delivered.");
    }
    cancel(order: IOrder): void {
        throw new Error("Order has already been delivered.");
    }
    revert(order: IOrder): void {
        throw new Error("Order has already been delivered.");
    }
    
}