import { IDelivery } from "./i-delivery-type";

const BASE_COST = 5.00;
const COST_PER_KM = 0.80;
const COST_PER_KG = 0.30;

export class EconomicDelivery implements IDelivery {
  // - Economico: 5.00 + (0.80 * distancia_km) + (0.30 * peso_kg)
  calculate(distance: number, weight: number, orderPrice: number): number {
    return BASE_COST + (COST_PER_KM * distance) + (COST_PER_KG * weight);
  }
}
