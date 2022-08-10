import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService, User } from '@auth0/auth0-angular';
import { combineLatest, forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ShoppingCartItem } from 'src/app/schema/shopping-cart';
import { OrderService } from 'src/app/services/order.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'resumo-pedido',
  templateUrl: './resumo-pedido.component.html',
  styleUrls: ['./resumo-pedido.component.css'],
})
export class ResumoPedidoComponent implements OnInit {
  valorFrete: number = 0;

  formulario: FormGroup;
  user: User;

  itens: ShoppingCartItem[] = [];

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    public shoppingCartService: ShoppingCartService,
    private authService: AuthService,
    private orderService: OrderService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadData();

    this.formulario = this.formBuilder.group({
      rua: ['', Validators.required],
      numero: ['', Validators.required],
      cep: ['', Validators.required],
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

    this.valorFrete = Math.random() * 20;
  }

  private loadData() {
    this.itens = this.shoppingCartService.getAll();
  }

  criarPedido() {
    const request = {
      userNickname: this.user.nickname,
      address: {
        street: this.formulario.get('rua').value,
        number: this.formulario.get('numero').value,
        zipCode: this.formulario.get('cep').value,
        district: this.formulario.get('bairro').value,
        city: this.formulario.get('cidade').value,
        state: this.formulario.get('estado').value,
      },
      payment: {
        name: this.formulario.get('nome').value,
        number: this.formulario.get('numeroCartao').value,
        cvv: this.formulario.get('cvv').value,
        expirationDate: this.formulario.get('dataExpiracao').value
      },
    };

    this.orderService
      .createOrder(request)
      .pipe(this.addItemsToOrder(this.itens))
      .subscribe((value) => {
        this.shoppingCartService.clear();
        this.snackBar.open('Pedido criado com sucesso!', '', { duration: 3000 });
        setTimeout(() => this.router.navigate(['']), 3000);
      });
  }

  addItemsToOrder(itemsOfCart: ShoppingCartItem[]) {
    return switchMap((id: string) => {
      let request = [];

      for (let item of itemsOfCart) {
        request.push(
          this.orderService.createOrderItem(id, {
            productId: item.productId,
            observation: item.name,
            quantity: item.amount,
            total: item.price
          })
        );
      }

      return combineLatest(request);
    });
  }

  remover(productId: string) {
    this.shoppingCartService.remove(productId);
    this.loadData();
  }
}
