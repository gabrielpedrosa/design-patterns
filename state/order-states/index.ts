import { IOrder } from "../order";

export interface IOrderState {
  status: string;
  prepare(order: IOrder): void;
  dispatch(order: IOrder): void;
  deliver(order: IOrder): void;
  cancel(order: IOrder): void;
  revert(order: IOrder): void;
}
