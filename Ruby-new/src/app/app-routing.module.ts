import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { ProductListComponent } from './product/product-list.component';
import { ProductShowComponent } from './product/product-show.component';
import { HomepageComponent} from './homepage/homepage.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',         component: HomepageComponent },
  { path: 'products',     component: ProductListComponent },
  { path: 'products/:id', component: ProductShowComponent }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
