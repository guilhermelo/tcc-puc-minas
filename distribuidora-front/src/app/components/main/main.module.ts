import { NgModule } from '@angular/core';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule
} from '@angular/platform-browser/animations';
import { ProductService } from 'src/app/services/product.service';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    FlexModule,
    FlexLayoutModule
  ],
  declarations: [MainComponent],
  exports: [MainComponent],
  providers: [ProductService],
})
export class MainModule {}
