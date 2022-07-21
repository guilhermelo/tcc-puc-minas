import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductList } from '../schema/poduct';
import { ShoppingCartList } from '../schema/shopping-cart';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private _storage: Storage = window.sessionStorage;
  private _storageName = 'shoppingCart';

  constructor(private http: HttpClient) {}

  addItemToCart(product: ProductList) {

    const shoppingCartItem: ShoppingCartList = {
      productId: product.id,
      name: product.name,
      price: product.price
    }

    const shoppingCartItems = this.getAll().concat(shoppingCartItem);

    this.set(this._storageName, shoppingCartItems);
  }

  getAll(): ShoppingCartList[] {
    return this.get(this._storageName) || [];
  }

  count() {
    return this.getAll().length;
  }

  set(key: string, value: any) {
    if (this._storage) {
      this._storage.setItem(key, JSON.stringify(value));
    }
  }

  get(key: string): any {
    if (this._storage) {
      return JSON.parse(this._storage.getItem(key));
    }
    return null;
  }

  remove(key: string): boolean {
    if (this._storage) {
      this._storage.removeItem(key);
      return true;
    }
    return false;
  }

  clear(): boolean {
    if (this._storage) {
      this._storage.clear();
      return true;
    }
    return false;
  }
}
