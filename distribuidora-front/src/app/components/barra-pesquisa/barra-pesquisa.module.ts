import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BarraPesquisaComponent } from './barra-pesquisa.component';

@NgModule({
  imports: [FormsModule, CommonModule, MatFormFieldModule, MatInputModule],
  declarations: [BarraPesquisaComponent],
  exports: [BarraPesquisaComponent],
})
export class BarraPesquisaModule {}
