import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { map, switchMap } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { forkJoin, OperatorFunction } from 'rxjs';
import { ShoppingCartItem } from 'src/app/schema/shopping-cart';
import { AuthService, User } from '@auth0/auth0-angular';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  constructor(
    private shoppingService: ShoppingCartService,
    private router: Router
  ) {}

  itemsOfCart = new Array<ShoppingCartItem>();
  valorTotal = 0;
  quantidadeItems = 0;

  ngOnInit(): void {
    this.updateData();
  }

  private updateData() {
    this.itemsOfCart = this.shoppingService.getAll();
    this.calcularQuantidadeItens();
    this.calcularValorTotal();
  }

  prosseguirParaCriarPedido() {
    this.router.navigate(['checkout']);
  }

  remover(id: string) {
    this.shoppingService.remove(id);
    this.updateData();
  }

  comecarComprar() {
    this.router.navigate(['']);
  }

  inc(item: ShoppingCartItem) {
    this.shoppingService.increaseAmountItem(item);
    this.updateData();
  }

  dec(item: ShoppingCartItem) {
    this.shoppingService.decreaseAmountItem(item);
    this.updateData();
  }

  calcularQuantidadeItens() {
    this.quantidadeItems = this.shoppingService.quantidadeItems();
  }

  calcularValorTotal() {
    this.valorTotal = this.shoppingService.valorTotal();
  }
}
