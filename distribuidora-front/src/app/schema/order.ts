export interface CreateOrder {
  userNickname: string;
}

export interface CreateOrderItem {
  productId: string;
  quantity: number;
  total: number;
  observation: string;
}

export interface OrderList {
  address: {
    state: string;
    number: string;
    street: string;
    district: string;
    city: string;
    s;
  };
  status: string;
  generatedAt: string;
  identifier: string;
}

export interface OrderItemList {
  id: string;
  product: Product;
  quantity: number;
  total: number;
}

interface Product {
  id: string;
  name: string;
  price: number;
}
