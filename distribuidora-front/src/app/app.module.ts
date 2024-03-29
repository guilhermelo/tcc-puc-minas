import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthConfig, AuthGuard, AuthModule } from '@auth0/auth0-angular';
import { AppComponent } from './app.component';
import { BarraPesquisaModule } from './components/barra-pesquisa/barra-pesquisa.module';
import { MainComponent } from './components/main/main.component';
import { MainModule } from './components/main/main.module';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { ProductService } from './services/product.service';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);

const authConfiguration: AuthConfig = {
  domain: 'dev-ail8x0n8.us.auth0.com',
  clientId: 'DznYZrTBD25DE1nzplO4lypyZOs9BLLZ',
  useRefreshTokens: true,
  scope: 'openid profile',
  audience: 'http://localhost:8080',
  httpInterceptor: {
    allowedList: ['/api/*'],
  },
};

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'shopping-cart',
    loadChildren: () =>
      import('./components/shopping-cart/shopping-cart.module').then(
        (m) => m.ShoppingCartModule
      ),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./components/resumo-pedido/resumo-pedido.module').then(
        (m) => m.ResumoPedidoModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'my-orders',
    loadChildren: () =>
      import('./components/order/order.module').then((m) => m.OrderModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    AuthModule.forRoot(authConfiguration),
    MainModule,
    HttpClientModule,
    BarraPesquisaModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    FlexModule,
    FlexLayoutModule,
    MatSidenavModule,
  ],
  declarations: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ProductService,
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
