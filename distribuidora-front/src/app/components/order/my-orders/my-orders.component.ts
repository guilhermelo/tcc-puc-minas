import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderList } from 'src/app/schema/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'my-orders',
  templateUrl: './my-orders.component.html'
})
export class MyOrdersComponent implements OnInit {

  constructor(private orderService: OrderService, private router: Router, private activatedRoute: ActivatedRoute) {}

  orders: OrderList[] = [];

  ngOnInit(): void {
    this.orderService.getOrdersByUser().subscribe(orders => {
      this.orders = orders;
    });
  }

  abrirDetalhePedido(id: string) {
    this.router.navigate([id, 'detail'], { relativeTo: this.activatedRoute });
  }
}
