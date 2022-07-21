import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductList } from '../schema/poduct';
import { ShoppingCartList } from '../schema/shopping-cart';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private _storage: Storage = window.sessionStorage;
  private _storageName = 'shoppingCart';
  private newItemAdded: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) {}

  addItemToCart(product: ProductList) {

    const shoppingCartItem: ShoppingCartList = {
      productId: product.id,
      name: product.name,
      price: product.price
    }

    const shoppingCartItems = this.getAll().concat(shoppingCartItem);

    this.set(this._storageName, shoppingCartItems);

    this.newItemAdded.next(1);
  }

  getAll(): ShoppingCartList[] {
    return this.get(this._storageName) || [];
  }

  count() {
    return this.newItemAdded.asObservable();
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

  remove(productId: string): boolean {
    if (this._storage) {

      const listaAtualizada = this.getAll().filter(i => i.productId !== productId);

      this.set(this._storageName, listaAtualizada);

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
