import { EconomicDelivery } from "../strategy/strategies/economic-delivery";
import { ExpressDelivery } from "../strategy/strategies/express-delivery";
import { IDelivery } from "../strategy/strategies/i-delivery-type";
import { ScheduleDelivery } from "../strategy/strategies/schedule-delivery";

export type DeliveryType = "economic" | "express" | "schedule";

export class DeliveryFactory {
    static createDelivery(type: DeliveryType): IDelivery {
        switch (type) {
            case "economic":
                return new EconomicDelivery();
            case "express":
                return new ExpressDelivery();
            case "schedule":
                return new ScheduleDelivery();
            default:
                throw new Error("Tipo de entrega desconhecido");
        }
    }
}