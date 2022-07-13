export interface CreateOrder {
  userId: string;
}

export interface CreateOrderItem {
  productId: string;
  quantity: number;
  observation: string;
}
