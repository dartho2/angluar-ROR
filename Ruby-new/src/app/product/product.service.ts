import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from  '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Product} from './product';

@Injectable()
export class ProductService {
  private productsUrl = 'http://localhost:3000/products';

  constructor(private http: Http) {}
    getProducts(): Observable<Product[]> {
      return this.http.get(this.productsUrl)
        .map((response: Response) => <Product[]>response.json())
  }
  getProduct(id: number){
  return this.http.get(this.productsUrl + "/" + id + '.json');
  }
}
