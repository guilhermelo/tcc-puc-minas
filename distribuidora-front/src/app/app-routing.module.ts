import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProductModule } from './components/product/product.module';

const routes = [{ path: '', component: MainComponent }];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
