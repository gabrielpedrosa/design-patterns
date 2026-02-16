import { EconomicDelivery } from "./strategies/economic-delivery";
import { ExpressDelivery } from "./strategies/express-delivery";
import { ScheduleDelivery } from "./strategies/schedule-delivery";

type DeliveryType = 'economic' | 'express' | 'schedule';


type Order = {
    distance: number;
    weight: number;
    orderPrice: number;
}

const order: Order = {
    distance: 10,
    weight: 5,
    orderPrice: 100
}

export class DeliveryCalculator {
    calculate(order: Order, deliveryType: DeliveryType): number {
        switch (deliveryType) {
            default:
            case 'economic':
                return new EconomicDelivery().calculate(order.distance, order.weight, order.orderPrice);
            case 'express':
                return new ExpressDelivery().calculate(order.distance, order.weight, order.orderPrice);
            case 'schedule':
                return new ScheduleDelivery().calculate(order.distance, order.weight, order.orderPrice);
                
        }
    }

    main() {
        const costEconomic = this.calculate(order, 'economic');
        const costExpress = this.calculate(order, 'express');
        const costSchedule = this.calculate(order, 'schedule');
        console.log(`O custo de entrega para o tipo economic é: R$ ${costEconomic.toFixed(2)}`);
        console.log(`O custo de entrega para o tipo express é: R$ ${costExpress.toFixed(2)}`);
        console.log(`O custo de entrega para o tipo schedule é: R$ ${costSchedule.toFixed(2)}`);
    }
}

new DeliveryCalculator().main();
