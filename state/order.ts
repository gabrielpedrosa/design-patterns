import { IOrderState } from "./order-states";
import { OrderPlaced } from "./order-states/order-placed";

export interface IOrder {
 setState(state: IOrderState): void;
 getState(): IOrderState;
 getStatus(): string;
 prepare(): void;
 ship(): void;
 deliver(): void;
 cancel(): void;
}

export class Order implements IOrder {
    private state: IOrderState;

    constructor() {
        this.state = new OrderPlaced();
    }

    setState(state: IOrderState): void {
        this.state = state;
    }

    getState(): IOrderState {
        return this.state;
    }

    getStatus(): string {
        return this.state.status;
    }

    prepare(): void {
        this.state.prepare(this);
    }

    ship(): void {
        this.state.dispatch(this);
    }

    deliver(): void {
        this.state.deliver(this);
    }

    cancel(): void {
        this.state.cancel(this);
    }

    printStatus(): void {
        console.log("Current Status: " + this.state.status);
    }
}