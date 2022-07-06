import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatIconModule],
  declarations: [MenuComponent],
  exports: [MenuComponent],
})
export class MenuModule {}
