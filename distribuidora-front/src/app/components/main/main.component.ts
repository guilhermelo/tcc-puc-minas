import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '@auth0/auth0-angular';
import { ProductList } from 'src/app/schema/poduct';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(
    private shoppingCartService: ShoppingCartService,
    private productService: ProductService,
    private authService: AuthService
  ) {}

  products = new Array<ProductList>();
  user: User;

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      this.user = user;
    });

    this.productService.listAllProducts().subscribe((products) => {
      this.products = products;
    });
  }

  public adicionarCarrinho(product: ProductList) {
    this.shoppingCartService
      .addItemToCart(product);
  }
}
