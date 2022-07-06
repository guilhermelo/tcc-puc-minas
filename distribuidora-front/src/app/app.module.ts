import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './components/menu/menu.module';
import { ProductModule } from './components/product/product.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenuModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
