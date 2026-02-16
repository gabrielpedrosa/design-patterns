
/**
 * DeliveryPriceInput defines the structure of the input data required to calculate delivery price.
 * 
 * @property {number} distance - The distance of the delivery in kilometers.
 * @property {number} weight - The weight of the package in kilograms.
 * @property {number} orderPrice - The total price of the order in R$.
 * @property {string} type - The type of delivery (e.g., "economic", "express", "schedule", "mercado-livre").
 */
export type DeliveryPriceInput = {
    distance: number;
    weight: number;
    orderPrice: number;
    type: string;
}

export interface IDeliveryPriceInput {
    getDeliveryPriceInput(): DeliveryPriceInput;
}