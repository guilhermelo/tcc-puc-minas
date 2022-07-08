import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatListModule } from '@angular/material/list';
import { ShoppingCartComponent } from "./shopping-cart.component";
import { ShoppingCartRoutingModule } from "./shopping-cart.routing";

@NgModule({
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    MatListModule
  ],
  declarations: [
    ShoppingCartComponent
  ],
  exports: [
    ShoppingCartComponent
  ]
})
export class ShoppingCartModule {
}
