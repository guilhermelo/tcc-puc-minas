import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule
  ],
  declarations: [
    MainComponent,
  ]
})
export class MainModule {}
