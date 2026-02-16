import { IDelivery } from "./i-delivery-type";

const BASE_COST = 6.00;
const COST_PER_KM = 0.90;
const COST_PER_KG = 0.40;
const COST_PER_ORDER_PRICE = 0.02;

export class ScheduleDelivery implements IDelivery {

    // - Agendado: 6.00 + (0.90 * distancia_km) + (0.40 * peso_kg) + (0.02 * valor_pedido)
  calculate(distance: number, weight: number, orderPrice: number): number {
    return BASE_COST + (COST_PER_KM * distance) + (COST_PER_KG * weight) + (COST_PER_ORDER_PRICE * orderPrice);
  }
}