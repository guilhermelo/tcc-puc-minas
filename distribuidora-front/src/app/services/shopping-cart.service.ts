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
  private shoppingCartZerado: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) {}

  addItemToCart(product: ProductList) {

    const shoppingCartItem: ShoppingCartList = {
      productId: product.id,
      name: product.name,
      price: product.price,
      imageUrl: 'https://www.imigrantesbebidas.com.br/bebida/images/products/full/222-cerveja-heineken-long-neck-330ml.jpg'
    }

    const shoppingCartItems = this.getAll().concat(shoppingCartItem);

    this.set(this._storageName, shoppingCartItems);

    this.newItemAdded.next(1);
  }

  getAll(): ShoppingCartList[] {
    return this.get(this._storageName) || [];
  }

  valorTotal(): number {
    return this.getAll().map(i => i.price).reduce((total, i) => total + i, 0);
  }

  countAsObservable() {
    return this.newItemAdded.asObservable();
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
      this._storage.removeItem(this._storageName);
      this.zerar();
      return true;
    }
    return false;
  }

  private zerar() {
    this.shoppingCartZerado.next(0);
  }

  zerarContador() {
    return this.shoppingCartZerado.asObservable();
  }
}
