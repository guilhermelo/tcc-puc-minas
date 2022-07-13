import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CreateOrder, CreateOrderItem } from "../schema/order";

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {}

  url = 'http://localhost:8080';

  createOrder(request: CreateOrder) {
    return this.http.post<CreateOrder>(`${this.url}/orders`, request, { observe: 'response' });
  }

  createOrderItem(id: string, request: CreateOrderItem) {
    return this.http.post<CreateOrderItem>(`${this.url}/orders/${id}/items`, request);
  }

}
