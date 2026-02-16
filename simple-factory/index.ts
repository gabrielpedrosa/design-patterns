import { DeliveryCalculator } from "../strategy";
import { DeliveryFactory, DeliveryType } from "./delivery-factory";

function main() {
    const deliveryType: DeliveryType = "schedule";
    const deliveryTypeClass = DeliveryFactory.createDelivery(deliveryType);
    const deliveryCalculator = new DeliveryCalculator(deliveryTypeClass);

    const distance = 10; // km
    const weight = 5; // kg
    const orderPrice = 100; // R$

    const cost = deliveryCalculator.calculate({ distance, weight, orderPrice });
    console.log(`Delivery ${deliveryType} Cost:  R$ ${cost.toFixed(2)}`);
}

main();
