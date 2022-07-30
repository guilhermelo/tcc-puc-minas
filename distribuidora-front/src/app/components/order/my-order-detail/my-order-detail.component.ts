import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OrderItemList } from "src/app/schema/order";
import { OrderService } from "src/app/services/order.service";

@Component({
  selector: 'my-order-detail',
  templateUrl: './my-order-detail.component.html'
})
export class MyOrderDetailComponent implements OnInit{

  orderItems: OrderItemList[] = [];

  constructor(private orderService: OrderService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const orderId = this.activatedRoute.snapshot.params.orderId;
    this.orderService.findOrderItemsByOrderId(orderId).subscribe(items => {
      this.orderItems = items;
    });
  }

}
