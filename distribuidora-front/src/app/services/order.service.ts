import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of, OperatorFunction } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { CreateOrder, CreateOrderItem } from "../schema/order";
import { ShoppingCartList } from "../schema/shopping-cart";

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {}

  url = 'http://localhost:8080/api';

  createOrder(request: CreateOrder) {
    return this.http.post<CreateOrder>(`${this.url}/orders`, request, { observe: 'response' }).pipe(this.getIdFromLocation());
  }

  getIdFromLocation(): OperatorFunction<any, string> {
    return map(
      (response: HttpResponse<any>) =>
        response.headers.get('Location')?.split('/').pop() || ''
    );
    }

  createOrderItem(id: string, request: CreateOrderItem) {
    return this.http.post<CreateOrderItem>(`${this.url}/orders/${id}/items`, request);
  }

}
