import { Component } from '@angular/core';
import { ShoppingCartService } from './services/shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingCartService]
})
export class AppComponent {


  constructor(private shoppingCartService: ShoppingCartService) {}

  produtos = [
    {
      id: 1,
      name: 'Produto 1',
      price: 100
    },
    {
      id: 2,
      name: 'Produto 2',
      price: 200
    },
    {
      id: 3,
      name: 'Produto 3',
      price: 300
    },
    {
      id: 4,
      name: 'Produto 4',
      price: 400
    },
    {
      id: 5,
      name: 'Produto 5',
      price: 500
    },
    {
      id: 6,
      name: 'Produto 6',
      price: 600
    },
    {
      id: 7,
      name: 'Produto 7',
      price: 700
    }
  ];


  public pesquisar(e: Event) {
    e.preventDefault();
    console.log('Pesquisando...');
  }

  public adicionarCarrinho(id: string) {
    const objeto = this.shoppingCartService.get('shoppingCart') || `[]`;

    const items = JSON.parse(objeto);

    this.shoppingCartService.set('shoppingCart', items.concat(id));
  }
}
