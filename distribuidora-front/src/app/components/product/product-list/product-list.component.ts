import { Component } from "@angular/core";

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {

  items = [1, 2, 3, 4, 5, 6];

}
