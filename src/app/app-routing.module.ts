import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [];

routes.push({ path: '', component: ProductListComponent });
routes.push({ path: 'product/:productId', component: ProductDetailComponent });
routes.push({ path: 'cart', component: CartComponent });

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
