import { Component, Input } from "@angular/core";
import { ShoppingCartItem } from "src/app/schema/shopping-cart";

@Component({
  selector: 'items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent {
  @Input() items: ShoppingCartItem[] = [];

  @Input() subTotal = 0;

  @Input() frete = 0;
}
