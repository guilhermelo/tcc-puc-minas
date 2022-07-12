import { Component } from "@angular/core";

@Component({
  selector: 'barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent {

  public pesquisar(e: Event) {
    e.preventDefault();
    console.log('Pesquisando...');
  }
}
