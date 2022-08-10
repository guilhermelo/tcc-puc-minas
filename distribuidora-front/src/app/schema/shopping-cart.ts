export interface AddItemToCart {
  productId: string;
}

export interface ShoppingCartItem {
  productId: string;
  name: string;
  price: number;
  originalPrice: number;
  imageUrl: string;
  amount: number;
}
