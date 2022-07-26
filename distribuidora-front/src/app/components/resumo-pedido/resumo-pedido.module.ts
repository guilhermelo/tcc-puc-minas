import { CommonModule, DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { OrderService } from 'src/app/services/order.service';
import { ResumoPedidoComponent } from './resumo-pedido.component';
import { ResumoRoutingModule } from './resumo.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ResumoRoutingModule,
    MatButtonModule,
  ],
  declarations: [ResumoPedidoComponent],
  exports: [ResumoPedidoComponent],
  providers: [OrderService],
})
export class ResumoPedidoModule {}
