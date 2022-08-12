import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { PipesModule } from "src/app/pipes/pipes.module";
import { OrderService } from "src/app/services/order.service";
import { MyOrderDetailComponent } from "./my-order-detail/my-order-detail.component";
import { MyOrdersComponent } from "./my-orders/my-orders.component";
import { OrderRoutingModule } from "./order.routing";

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule,
    PipesModule,
    MatButtonModule
  ],
  declarations: [MyOrdersComponent, MyOrderDetailComponent],
  exports: [MyOrdersComponent, MyOrderDetailComponent],
  providers: [OrderService]
})
export class OrderModule {}
