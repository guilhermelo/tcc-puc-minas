import { CommonModule, DecimalPipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ResumoPedidoComponent } from "./resumo-pedido.component";
import { ResumoRoutingModule } from "./resumo.routing";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, ResumoRoutingModule, MatButtonModule],
  declarations: [ResumoPedidoComponent],
  exports: [ResumoPedidoComponent],
  providers: [DecimalPipe]
})
export class ResumoPedidoModule {

}
