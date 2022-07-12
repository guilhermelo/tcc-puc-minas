import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatListModule } from '@angular/material/list';
import { ShoppingCartComponent } from "./shopping-cart.component";
import { ShoppingCartRoutingModule } from "./shopping-cart.routing";
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from "@angular/material/card";
import { OrderService } from "src/app/services/order.service";

@NgModule({
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    MatListModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [
    ShoppingCartComponent
  ],
  exports: [
    ShoppingCartComponent
  ],
  providers: [OrderService]
})
export class ShoppingCartModule {
}
