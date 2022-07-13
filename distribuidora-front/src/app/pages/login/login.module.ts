import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [BrowserModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule {}
