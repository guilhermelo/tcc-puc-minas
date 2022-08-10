import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductList } from '../schema/poduct';
import { ShoppingCartItem } from '../schema/shopping-cart';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {

  private _storage: Storage = window.sessionStorage;
  private _storageName = 'shoppingCart';
  private newItemAdded: BehaviorSubject<number> = new BehaviorSubject<number>(
    0
  );
  private shoppingCartZerado: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) {}

  addItemToCart(product: ProductList) {
    const shoppingCartItem: ShoppingCartItem = {
      productId: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      amount: 1,
      originalPrice: product.price,
    };

    const items = this.getAll();
    const itemsUpdated = this.updateShoppingCartItems(shoppingCartItem, items);

    this.set(this._storageName, itemsUpdated);

    if(!items.find(i => i.productId === product.id)) {
      this.newItemAdded.next(1);
    }
  }

  increaseAmountItem(item: ShoppingCartItem) {
    const itemsUpdated = this.updateShoppingCartItem(item, this.getAll());

    this.set(this._storageName, itemsUpdated);
  }

  decreaseAmountItem(item: ShoppingCartItem) {
    const itemsUpdated = this.decreaseShoppingCartItemAmount(item, this.getAll()).filter(i => i.amount !== 0);

    this.set(this._storageName, itemsUpdated);
  }

  private updateShoppingCartItems(shoppingCartItem: ShoppingCartItem, items: ShoppingCartItem[]) {
    const foundItem = items.find(
      (i) => i.productId === shoppingCartItem.productId
    );

    if (foundItem) {
      return this.updateShoppingCartItem(foundItem, items);
    }

    return items.concat(shoppingCartItem);
  }

  private updateShoppingCartItem(
    item: ShoppingCartItem,
    items: ShoppingCartItem[]
  ) {
    const index = items.findIndex((i) => i.productId === item.productId);

    const foundItem = items.find((i) => i.productId === item.productId);

    items[index] = {
      ...foundItem,
      amount: foundItem.amount + 1,
      price: foundItem.price + item.originalPrice,
    };

    return items;
  }

  private decreaseShoppingCartItemAmount(
    item: ShoppingCartItem,
    items: ShoppingCartItem[]
  ) {
    const index = items.findIndex((i) => i.productId === item.productId);

    const foundItem = items.find((i) => i.productId === item.productId);

    items[index] = {
      ...foundItem,
      amount: foundItem.amount - 1,
      price: foundItem.price - item.originalPrice,
    };

    return items;
  }

  getAll(): ShoppingCartItem[] {
    return this.get(this._storageName) || [];
  }

  valorTotal(): number {
    return this.getAll()
      .map((i) => i.price)
      .reduce((total, i) => total + i, 0);
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
      const listaAtualizada = this.getAll().filter(
        (i) => i.productId !== productId
      );

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

  quantidadeItems(): number {
    return this.getAll().reduce((total, item) => total + item.amount, 0);
  }
}
