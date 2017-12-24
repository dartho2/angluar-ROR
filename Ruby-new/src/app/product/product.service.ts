import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Product} from './product';



@Injectable()
export class ProductService {
  headers: Headers;
  options: RequestOptions;
  private productsUrl = 'http://localhost:3000/products';

  constructor(private http: Http) {
    this.headers = new Headers({'Content-Type':'application/json'})
    this.options = new RequestOptions({headers: this.headers});
  }

  getProducts(): Observable<Product[]> {
    return this.http.get(this.productsUrl)
      .map((response: Response) => <Product[]>response.json())
  }

  getProduct(id: number) {
    return this.http.get(this.productsUrl + "/" + id + '.json');
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post(this.productsUrl, JSON.stringify(product), this.options)
  // #TODO return this.http.product(this.productUrl, JSON.stringify(product), options)
      .map((res: Response) => res.json());
  }
  updateProduct(product: Product): Observable<Product> {
    const url=`${this.productsUrl}/#{product.id}`;
    return this.http.put(url, JSON.stringify(product),
      this.options).map((res: Response) => res.json())
      .catch(this.handleError);
  }

  deleteProduct(id: number): Observable<Product>{
  const url= `${this.productsUrl}/#{id}`;
  return this.http.delete(url, this.options)
    .map(this.extractData)
    .catch(this.handleError)
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occured', error)
    return Promise.reject(error.messages || error);
  }

}
