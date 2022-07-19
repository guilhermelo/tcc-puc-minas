import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
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

  ngOnInit(): void {
    this.shoppingCart.count().subscribe((amount) => {
      this.numberOfItemsInCart = amount;
    });
  }

  abrirCarrinho() {
    this.router.navigate(['shopping-cart']);
  }

  teste(user: any) {
    this.auth.getAccessTokenSilently().subscribe(token => console.log(token));
  }
}
