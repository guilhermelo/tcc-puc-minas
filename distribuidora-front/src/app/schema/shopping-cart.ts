export interface AddItemToCart {
  productId: string;
}

export interface ShoppingCartList {
  id: string;
  productId: string;
  name: string;
  price: number;
}
