import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ItemsListComponent } from './items-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ItemsListComponent],
  exports: [ItemsListComponent],
})
export class ItemsListModule {}
