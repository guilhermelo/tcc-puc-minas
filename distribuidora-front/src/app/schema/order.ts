export interface CreateOrder {
  userNickname: string;
}

export interface CreateOrderItem {
  productId: string;
  quantity: number;
  observation: string;
}
