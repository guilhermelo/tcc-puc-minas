import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatListModule } from '@angular/material/list';
import { ShoppingCartComponent } from "./shopping-cart.component";
import { ShoppingCartRoutingModule } from "./shopping-cart.routing";
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from "@angular/material/card";
import { OrderService } from "src/app/services/order.service";
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from "@angular/material/grid-list";

@NgModule({
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
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
