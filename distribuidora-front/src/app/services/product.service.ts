import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductList } from '../schema/poduct';
import { AuthService } from '@auth0/auth0-angular';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable()
export class ProductService {
  url = 'http://localhost:8080/api';

  constructor(private http: HttpClient, private auth: AuthService) {}

  listAllProducts() {
    return this.http.get<Array<ProductList>>(`${this.url}/products`);

    // return this.auth.getAccessTokenSilently().pipe(switchMap(accessToken => {
    //   let headers = new HttpHeaders();

    //   headers = headers.set('Authorization', 'Bearer ' + accessToken);

    //   return this.http.get<Array<ProductList>>(`${this.url}/products`, { headers })
    // }));
  }
}
