import {Component} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Product} from "./product";
import {ProductService} from "./product.service";


@Component({
  selector: 'product-new',
  templateUrl: 'product-new.component.html',
  styleUrls: ['product.component.css']
})
export class ProductNewComponent {
  product = new Product;
  submitted: boolean = false; //check form

  constructor(private productService: ProductService) {
  }

  createProduct(product: Product) {
    this.submitted = true;
    this.productService.createProduct(product)
      .subscribe(data => {
          return true
        },
        error => {
          console.log("Error creating product");
          return Observable.throw(error);
        });
  }
}
