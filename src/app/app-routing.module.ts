// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { ProductDetailComponent } from './product-detail/product-detail.component';

// const routes: Routes = [
//   {
//     path: 'products/detail/:id',
//     component: ProductDetailComponent
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailComponent } from './customers-detail/customer-detail.component'
import { CustomersComponent } from './customers/customers-component'
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    component:ProductsComponent
  },
  {
    path: 'products',
    component:ProductsComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent
  },
  {
    path: 'customers',
    component:CustomersComponent
  },
  // {
  //   path: 'customers/:id',
  //   component:CustomerDetailComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
