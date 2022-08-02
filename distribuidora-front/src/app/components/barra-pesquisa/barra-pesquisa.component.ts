import { Component } from '@angular/core';
import { Params, Router } from '@angular/router';

@Component({
  selector: 'barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css'],
})
export class BarraPesquisaComponent {
  constructor(
    private router: Router
  ) {}

  public pesquisar(termo: HTMLInputElement) {
    let params: Params = {
      q: termo.value,
    };

    termo.value = '';

    this.router.navigate([''], { queryParams: params });
  }
}
