import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private shoppingCart: ShoppingCartService
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
}
