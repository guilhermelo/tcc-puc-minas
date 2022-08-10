import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderState',
})
export class OrderStatePipe implements PipeTransform {
  transform(value: string, ...args: any[]) {
    const status = {
      MADE: 'Relizado',
      PAID: 'Pago',
      READY: 'Pronto para ser enviado',
      OUT_FOR_DELIVERY: 'Enviado',
      DELIVERED: 'Entregue',
    };

    return status[value];
  }
}
