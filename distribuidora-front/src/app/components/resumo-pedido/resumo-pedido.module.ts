import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ResumoPedidoComponent } from "./resumo-pedido.component";
import { ResumoRoutingModule } from "./resumo.routing";

@NgModule({
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, ResumoRoutingModule, MatButtonModule],
  declarations: [ResumoPedidoComponent],
  exports: [ResumoPedidoComponent]
})
export class ResumoPedidoModule {

}
