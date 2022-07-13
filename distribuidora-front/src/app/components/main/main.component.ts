import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductList } from "src/app/schema/poduct";
import { ProductService } from "src/app/services/product.service";
import { ShoppingCartService } from "src/app/services/shopping-cart.service";

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private shoppingCartService: ShoppingCartService, private productService: ProductService) {}

  products = new Array<ProductList>();

  ngOnInit(): void {
    this.productService.listAllProducts().subscribe(products => {
      this.products = products;
    })
  }



  public adicionarCarrinho(id: string) {
    this.shoppingCartService.addItemToCart(id).subscribe(() => {});
  }
}
