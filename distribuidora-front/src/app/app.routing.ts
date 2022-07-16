import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'shopping-cart',
    loadChildren: () => import('./components/shopping-cart/shopping-cart.module').then((m) => m.ShoppingCartModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'extract',
    loadChildren: () => import('./components/resumo-pedido/resumo-pedido.module').then(m => m.ResumoPedidoModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
