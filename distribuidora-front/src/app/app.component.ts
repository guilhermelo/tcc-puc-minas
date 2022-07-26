import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '@auth0/auth0-angular';
import { ShoppingCartService } from './services/shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingCartService],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private shoppingCart: ShoppingCartService,
    public auth: AuthService,
    @Inject(DOCUMENT) public document: Document
  ) {}

  numberOfItemsInCart = 0;
  user: User;

  ngOnInit(): void {

    this.numberOfItemsInCart = this.shoppingCart.count();

    this.shoppingCart.countAsObservable().subscribe(numero => {
      this.numberOfItemsInCart += numero;
    });

    this.shoppingCart.zerarContador().subscribe(n => {
      this.numberOfItemsInCart = 0;
    });
  }

  abrirCarrinho() {
    this.router.navigate(['shopping-cart']);
  }

  acessarMeusPedidos() {
    this.router.navigate(['my-orders']);
  }
}
