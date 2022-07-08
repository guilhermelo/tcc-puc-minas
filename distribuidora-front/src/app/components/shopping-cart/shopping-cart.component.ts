import { Component, OnInit } from "@angular/core";
import { ShoppingCartService } from "src/app/services/shopping-cart.service";

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingService: ShoppingCartService) {}

  itemsOfCart = [];


  ngOnInit(): void {
   this.itemsOfCart = this.shoppingService.get('shoppingCart') || [];
  }

}
