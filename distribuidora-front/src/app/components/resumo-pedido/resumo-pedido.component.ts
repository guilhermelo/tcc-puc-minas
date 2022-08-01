import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, User } from '@auth0/auth0-angular';
import { combineLatest, forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ShoppingCartList } from 'src/app/schema/shopping-cart';
import { OrderService } from 'src/app/services/order.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'resumo-pedido',
  templateUrl: './resumo-pedido.component.html',
  styleUrls: ['./resumo-pedido.component.css'],
})
export class ResumoPedidoComponent implements OnInit {
  valorFrete: string = '0';

  formulario: FormGroup;
  user: User;

  itens: ShoppingCartList[] = [];

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    public shoppingCartService: ShoppingCartService,
    private authService: AuthService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {

    this.itens = this.shoppingCartService.getAll();

    this.formulario = this.formBuilder.group({
      rua: ['', Validators.required],
      numero: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      nome: ['', Validators.required],
      numeroCartao: ['', Validators.required],
      cvv: ['', Validators.required],
      dataExpiracao: ['', Validators.required],
    });

    this.authService.user$.subscribe((user) => {
      this.user = user;
    });

    const numero = (Math.random() * 100).toString().split('.');
    this.valorFrete = `${numero[0]},${numero[1].substr(0, 2)}`;
  }

  criarPedido() {
    const request = {
      userNickname: this.user.nickname,
      address: {
        street: this.formulario.get('rua').value,
        number: this.formulario.get('numero').value,
        zipCode: '',
        district: this.formulario.get('bairro').value,
        city: this.formulario.get('cidade').value,
        state: this.formulario.get('estado').value,
      },
      payment: {
        name: this.formulario.get('nome').value,
        number: this.formulario.get('numeroCartao').value,
        cvv: this.formulario.get('cvv').value,
        expirationDate: (
          this.formulario.get('dataExpiracao').value as string
        ).replace('/', ''),
      },
    };

    this.orderService
      .createOrder(request)
      .pipe(this.addItemsToOrder(this.itens))
      .subscribe((value) => {
        this.shoppingCartService.clear();
        this.router.navigate(['']);
      });
  }

  addItemsToOrder(itemsOfCart: ShoppingCartList[]) {
    return switchMap((id: string) => {
      let request = [];

      for (let item of itemsOfCart) {
        request.push(
          this.orderService.createOrderItem(id, {
            productId: item.productId,
            observation: item.name,
            quantity: item.price,
          })
        );
      }

      return combineLatest(request);
    });
  }
}
