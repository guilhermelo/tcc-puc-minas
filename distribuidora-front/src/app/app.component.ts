import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from './services/shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingCartService]
})
export class AppComponent {

}
