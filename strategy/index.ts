import { EconomicDelivery } from "./strategies/economic-delivery";
import { ExpressDelivery } from "./strategies/express-delivery";
import { IDelivery } from "./strategies/i-delivery-type";
import { ScheduleDelivery } from "./strategies/schedule-delivery";

type Order = {
  distance: number;
  weight: number;
  orderPrice: number;
};

const order: Order = {
  distance: 10,
  weight: 5,
  orderPrice: 100,
};

export class DeliveryCalculator {
  constructor(private delivery: IDelivery) {}

  calculate(order: Order): number {
    return this.delivery.calculate(order.distance, order.weight, order.orderPrice);
  }

  setDelivery(delivery: IDelivery) {
    this.delivery = delivery;
  }
}

const deliveryCalculator = new DeliveryCalculator(new EconomicDelivery());
const costEconomic = deliveryCalculator.calculate(order); // Calculate using economic delivery

deliveryCalculator.setDelivery(new ExpressDelivery());
const costExpress = deliveryCalculator.calculate(order); // Calculate using express delivery

deliveryCalculator.setDelivery(new ScheduleDelivery());
const costSchedule = deliveryCalculator.calculate(order); // Calculate using schedule delivery

console.log(`Economic Delivery Cost: R$ ${costEconomic.toFixed(2)}`);
console.log(`Express Delivery Cost: R$ ${costExpress.toFixed(2)}`);
console.log(`Schedule Delivery Cost: R$ ${costSchedule.toFixed(2)}`);