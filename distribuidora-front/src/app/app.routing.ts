import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'shopping-cart',
    loadChildren: () =>
      import('./components/shopping-cart/shopping-cart.module').then(
        (m) => m.ShoppingCartModule
      ),
  },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
