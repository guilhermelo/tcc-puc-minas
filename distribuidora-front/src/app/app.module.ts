import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { BarraPesquisaModule } from './components/barra-pesquisa/barra-pesquisa.module';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { ProductService } from './services/product.service';

const domain = 'dev-ail8x0n8.us.auth0.com';
const clientId = 'DznYZrTBD25DE1nzplO4lypyZOs9BLLZ';

@NgModule({
  imports: [
    BrowserModule,
    AuthModule.forRoot({
      domain,
      clientId,
      useRefreshTokens: true,
      scope: 'openid profile',
      audience: 'http://localhost:8080',
      httpInterceptor: {
        allowedList: ['/api/*']
      }
    }),
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    BarraPesquisaModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
  ],
  declarations: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ProductService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
