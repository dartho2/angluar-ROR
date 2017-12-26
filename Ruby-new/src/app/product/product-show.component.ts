import { Component, OnInit, Input} from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Http } from "@angular/http";
import { Product } from "./product";
import { ProductService} from "./product.service";
import {Observable} from "rxjs/Rx";


@Component({
  selector: 'product-show',
  templateUrl: 'product-show.component.html',
   styleUrls: ['product.component.css']
})
export class ProductShowComponent implements OnInit {

  id: number;
  routeId: any;
  errorMesage: any;
  editBtnClicked: boolean = false;

  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
@Input() product: Product;
  ngOnInit(){
    this.routeId = this.route.params.subscribe(
      params => {
        this.id = +params['id'];
      }
    )
    let productRequest = this.route.params
      .flatMap((params: Params) =>
      this.productService.getProduct(+params['id']));
    productRequest.subscribe(response => this.product = response.json());
  }
  // update(product: Product) {
  //   this.editBtnClicked = true;
  //   this.productService.updateProduct(this.product.id)
  //     .subscribe(data => {
  //     return true
  //   }, error => {
  //       console.log('Error editing');
  //       return Observable.throw(error);
  //     })
  // }
  delete(product: Product) {
    this.productService.deleteProduct(this.product.id)
      .subscribe(data => {return true },
        error => this.errorMesage = error)
  }
}
