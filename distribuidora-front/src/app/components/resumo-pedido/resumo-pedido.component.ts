import { DecimalPipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ShoppingCartService } from "src/app/services/shopping-cart.service";

@Component({
  selector: 'resumo-pedido',
  templateUrl: './resumo-pedido.component.html',
  styleUrls: ['./resumo-pedido.component.css']
})
export class ResumoPedidoComponent implements OnInit {

  valorFrete: string = '0';

  formulario: FormGroup;

  constructor(public formBuilder: FormBuilder, public shoppingCartService: ShoppingCartService) {
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      rua: ['', Validators.required],
      numero: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      nome: ['', Validators.required],
      numeroCartao: ['', Validators.required],
      dataExpiracao: ['', Validators.required]
    });

    const numero = (Math.random() * 100).toString().split('.')
    this.valorFrete = `${numero[0]},${numero[1].substr(0, 2)}`;
    console.log('Resumo de pedido aberto');
  }

  criarPedido() {
    console.log(this.formulario.value);
  }

}
