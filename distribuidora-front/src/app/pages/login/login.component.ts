import { Component } from "@angular/core";

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {



  login() {
    console.log('fazendo login...');
  }
}
