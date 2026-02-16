import { IDelivery } from "./i-delivery-type";

const BASE_COST = 8.00;
const COST_PER_KM = 1.30;
const COST_PER_KG = 0.50;

export class ExpressDelivery implements IDelivery {

    // - Expresso: 8.00 + (1.30 * distancia_km) + (0.50 * peso_kg)
  calculate(distance: number, weight: number, orderPrice: number): number {
    return BASE_COST + (COST_PER_KM * distance) + (COST_PER_KG * weight);
  }
}