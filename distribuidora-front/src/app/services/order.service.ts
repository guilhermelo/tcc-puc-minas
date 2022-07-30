import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { of, OperatorFunction } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CreateOrder, CreateOrderItem, OrderItemList, OrderList } from '../schema/order';
import { ShoppingCartList } from '../schema/shopping-cart';

@Injectable()
export class OrderService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  url = 'http://localhost:8080/api/orders';

  createOrder(request: CreateOrder) {
    return this.http
      .post<CreateOrder>(`${this.url}`, request, { observe: 'response' })
      .pipe(this.getIdFromLocation());
  }

  getIdFromLocation(): OperatorFunction<any, string> {
    return map(
      (response: HttpResponse<any>) =>
        response.headers.get('Location')?.split('/').pop() || ''
    );
  }

  createOrderItem(id: string, request: CreateOrderItem) {
    return this.http.post<CreateOrderItem>(`${this.url}/${id}/items`, request);
  }

  getOrdersByUser() {
    return this.auth.user$.pipe(
      switchMap((user) =>
        this.http.get<OrderList[]>(`${this.url}/${user.nickname}`)
      )
    );
  }

  findOrderItemsByOrderId(id: string) {
    return this.http.get<OrderItemList[]>(`${this.url}/${id}/items`);
  }
}
