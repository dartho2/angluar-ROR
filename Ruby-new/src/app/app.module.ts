import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { HttpModule} from "@angular/http";

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { ProductShowComponent } from './product/product-show.component';
import { ProductNewComponent } from './product/product-new.component';
import { ProductService} from "./product/product.service";
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductShowComponent,
    ProductNewComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule

  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
