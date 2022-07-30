import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MyOrderDetailComponent } from "./my-order-detail/my-order-detail.component";
import { MyOrdersComponent } from "./my-orders/my-orders.component";

const routes = [
  { path: '', component: MyOrdersComponent },
  {
    path: ':orderId/detail',
    component: MyOrderDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class OrderRoutingModule {

}
