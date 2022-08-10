import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ProductList } from '../schema/poduct';
import { AuthService } from '@auth0/auth0-angular';
import { catchError, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProductService {
  url = `${environment.api_url}/api/products`;

  constructor(private http: HttpClient, private auth: AuthService) {}

  listAllProducts(termoPesquisa: string) {

    let params = new HttpParams();

    if(termoPesquisa)
      params = params.append('search', termoPesquisa);

    return this.http.get<Array<ProductList>>(this.url, { params });
  }
}
