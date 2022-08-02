import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService, User } from '@auth0/auth0-angular';
import { switchMap } from 'rxjs/operators';
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
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {}

  products = new Array<ProductList>();
  user: User;
  breakpoint: number;

  ngOnInit(): void {
    this.onResize(null);
    this.authService.user$.subscribe(user => {
      this.user = user;
    });

    this.activatedRoute.queryParams.pipe(switchMap((params: Params) => this.productService.listAllProducts(params['q'])))
    .subscribe(products => this.products = products);
  }

  public adicionarCarrinho(product: ProductList) {
    this.shoppingCartService.addItemToCart(product);
  }

  onResize(event: any) {
    const tamanhoTela = window.innerWidth;

    if(tamanhoTela <= 400) {
      this.breakpoint = 1;
    } else if(tamanhoTela > 400 && tamanhoTela <= 600) {
      this.breakpoint = 2;
    } else if(tamanhoTela > 600 && tamanhoTela <= 800) {
      this.breakpoint = 3;
    } else if(tamanhoTela > 800 && tamanhoTela < 1000) {
      this.breakpoint = 4;
    } else {
      this.breakpoint = 6;
    }
  }
}
