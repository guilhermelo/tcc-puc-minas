import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";
import { PipesModule } from "src/app/pipes/pipes.module";
import { OrderService } from "src/app/services/order.service";
import { MyOrdersComponent } from "./my-orders/my-orders.component";
import { OrderRoutingModule } from "./order.routing";

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule,
    PipesModule,
    MatButtonModule
  ],
  declarations: [MyOrdersComponent],
  exports: [MyOrdersComponent],
  providers: [OrderService]
})
export class OrderModule {}
