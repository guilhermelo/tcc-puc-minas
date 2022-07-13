import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductList } from '../schema/poduct';

@Injectable()
export class ProductService {
  url = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  listAllProducts() {
    return this.http.get<Array<ProductList>>(`${this.url}/products`);
  }
}
