import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ProductList } from '../schema/poduct';
import { AuthService } from '@auth0/auth0-angular';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable()
export class ProductService {
  url = 'http://localhost:8080/api';

  constructor(private http: HttpClient, private auth: AuthService) {}

  listAllProducts(termoPesquisa: string) {

    let params = new HttpParams();

    if(termoPesquisa)
      params = params.append('search', termoPesquisa);

    return this.http.get<Array<ProductList>>(`${this.url}/products`, { params });
  }
}
