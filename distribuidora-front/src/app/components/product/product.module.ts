import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [CommonModule, MatGridListModule],
  declarations: [ProductListComponent],
  exports: [ProductListComponent],
})
export class ProductModule {}
