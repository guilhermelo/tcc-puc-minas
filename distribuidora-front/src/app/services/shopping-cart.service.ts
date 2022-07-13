import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AddItemToCart, ShoppingCartList } from "../schema/shopping-cart";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {



  constructor(private http: HttpClient) {}

  private userId = 'c07f3fd2-df07-4f04-b1da-b46bcf5d3a51';
  private url = 'http://localhost:8080/shopping-carts';

  addItemToCart(productId: string) {
    return this.http.post<AddItemToCart>(`${this.url}/${this.userId}`, { productId });
  }

  getAll() {
    return this.http.get<Array<ShoppingCartList>>(`${this.url}/${this.userId}`);
  }

  count() {
    return this.http.get<number>(`${this.url}/${this.userId}/count`);
  }

  // private storage: Storage;

  // constructor() {
  //   this.storage = window.localStorage;
  // }

  // set(key: string, value: any) {
  //   if (this.storage) {
  //     this.storage.setItem(key, JSON.stringify(value));
  //   }
  // }

  // get(key: string): any {
  //   if (this.storage) {
  //     return JSON.parse(this.storage.getItem(key));
  //   }
  //   return null;
  // }

  // remove(key: string): boolean {
  //   if (this.storage) {
  //     this.storage.removeItem(key);
  //     return true;
  //   }
  //   return false;
  // }

  // clear(): boolean {
  //   if (this.storage) {
  //     this.storage.clear();
  //     return true;
  //   }
  //   return false;
  // }

}
