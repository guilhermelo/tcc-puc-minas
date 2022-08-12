import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OrderItemList, OrderList } from "src/app/schema/order";
import { OrderService } from "src/app/services/order.service";

@Component({
  selector: 'my-order-detail',
  templateUrl: './my-order-detail.component.html',
  styleUrls: ['./my-order-detail.component.css']
})
export class MyOrderDetailComponent implements OnInit{

  orderItems: OrderItemList[] = [];
  order: OrderList;

  totalItems = 0;
  valorTotal = 0;

  constructor(private orderService: OrderService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const orderId = this.activatedRoute.snapshot.params.orderId;

    this.orderService.getOrderByIdAndUser(orderId).subscribe(order => this.order = order);

    this.orderService.findOrderItemsByOrderId(orderId).subscribe(items => {
      this.orderItems = items;
      this.calculaQuantidadeItems(this.orderItems)
    });
  }

  calculaQuantidadeItems(orderItems: OrderItemList[]) {
    this.totalItems = orderItems.map(o => o.quantity).reduce((total, i) => total + i, 0);
    this.valorTotal = orderItems.reduce((total, i) => total + i.total, 0);
  }

}
