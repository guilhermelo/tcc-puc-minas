import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent},
  {
    path: 'shopping-cart',
    loadChildren: () => import('./components/shopping-cart/shopping-cart.module').then((m) => m.ShoppingCartModule),
  },
  {
    path: 'extract',
    loadChildren: () => import('./components/resumo-pedido/resumo-pedido.module').then(m => m.ResumoPedidoModule)
  }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
