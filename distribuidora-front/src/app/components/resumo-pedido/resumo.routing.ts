import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ResumoPedidoComponent } from "./resumo-pedido.component";

const routes = [
  { path: '', component: ResumoPedidoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ResumoRoutingModule {

}
