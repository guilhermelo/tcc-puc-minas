import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { map, switchMap } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { forkJoin, OperatorFunction } from 'rxjs';
import { ShoppingCartList } from 'src/app/schema/shopping-cart';
import { AuthService, User } from '@auth0/auth0-angular';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  constructor(
    private shoppingService: ShoppingCartService,
    private router: Router,
    private orderService: OrderService,
  ) {}

  itemsOfCart = new Array<ShoppingCartList>();
  total = 0;

  ngOnInit(): void {
    this.loadItems();
    this.total = this.itemsOfCart.reduce((total, atual) => total + atual.price, 0);
  }

  private loadItems() {
    this.itemsOfCart = this.shoppingService.getAll();
  }

  prosseguirParaCriarPedido() {
    this.router.navigate(['extract']);
  }

  // informarEndereco() {
  //   this.orderService
  //     .createOrder({ userNickname: this.user.nickname })
  //     .pipe(this.getIdFromLocation())
  //     .pipe(this.addItemsToOrder(this.itemsOfCart))
  //     .subscribe(() => {
  //       this.router.navigate(['extract']);
  //     });
  // }

  getIdFromLocation(): OperatorFunction<any, string> {
    return map(
      (response: HttpResponse<any>) =>
        response.headers.get('Location')?.split('/').pop() || ''
    );
  }

  addItemsToOrder(itemsOfCart: ShoppingCartList[]) {
    return switchMap((id: string) => {
      console.log(id);
      let request = [];

      for (let item of itemsOfCart) {
        request.push(
          this.orderService.createOrderItem(id, {
            productId: item.productId,
            observation: 'Observação',
            quantity: 100,
          })
        );
      }

      return forkJoin(request);
    });
  }

  remover(id: string) {
    this.shoppingService.remove(id);
    this.loadItems();
  }
}
