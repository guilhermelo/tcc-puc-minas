import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BarraPesquisaComponent } from './barra-pesquisa.component';

@NgModule({
  imports: [MatFormFieldModule, MatInputModule],
  declarations: [BarraPesquisaComponent],
  exports: [BarraPesquisaComponent],
})
export class BarraPesquisaModule {}
