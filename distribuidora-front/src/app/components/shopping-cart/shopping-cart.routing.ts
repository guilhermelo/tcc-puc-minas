import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart.component';

const routes = [
  { path: '', component: ShoppingCartComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ShoppingCartRoutingModule {}
