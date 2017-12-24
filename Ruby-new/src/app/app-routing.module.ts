import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProductListComponent} from './product/product-list.component';
import {ProductShowComponent} from './product/product-show.component';
import {ProductNewComponent} from './product/product-new.component';
import {HomepageComponent} from './homepage/homepage.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomepageComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'product/new', component: ProductNewComponent},
  {path: 'products/:id', component: ProductShowComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
