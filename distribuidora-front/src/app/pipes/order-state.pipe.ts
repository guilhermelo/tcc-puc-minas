import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'orderState'
})
export class OrderStatePipe implements PipeTransform {

  transform(value: string, ...args: any[]) {
    if(value === 'MADE') {
      return "Realizado";
    }
  }

}
