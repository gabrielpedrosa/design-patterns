import { Order } from "./order";

function main() {
    const order = new Order();
    order.printStatus();
    order.prepare();
    order.printStatus();    
    order.ship();
    order.printStatus();
    order.deliver();
    order.printStatus();
}

main();