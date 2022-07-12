import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OrderService } from "src/app/services/order.service";
import { ShoppingCartService } from "src/app/services/shopping-cart.service";

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingService: ShoppingCartService, private router: Router, private orderService: OrderService) {}

  itemsOfCart = [];


  ngOnInit(): void {
   this.itemsOfCart = this.shoppingService.get('shoppingCart') || [];
  }

  informarEndereco() {
    this.orderService.createOrder({userId: 'c07f3fd2-df07-4f04-b1da-b46bcf5d3a51'}).subscribe(() => {
      this.router.navigate(['extract']);
    });
  }
}
