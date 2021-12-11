// // // import { NgModule } from '@angular/core';
// // // import { BrowserModule } from '@angular/platform-browser';

// // // import { AppRoutingModule } from './app-routing.module';
// // // import { AppComponent } from './app.component';
// // // import { ProductsComponent } from './products/products.component';
// // // import { ProductDetailComponent } from './product-detail/product-detail.component';
// // // import { CustomersComponent } from './customers/customers.component';
// // // import { CustomersDetailComponent } from './customers-detail/customers-detail.component';

// // // @NgModule({
// // //   declarations: [
// // //     AppComponent,
// // //     ProductsComponent,
// // //     ProductDetailComponent,
// // //     CustomersComponent,
// // //     CustomersDetailComponent
// // //   ],
// // //   imports: [
// // //     BrowserModule,
// // //     AppRoutingModule
// // //   ],
// // //   providers: [],
// // //   bootstrap: [AppComponent]
// // // })
// // // export class AppModule { }

// // import { NgModule } from '@angular/core';
// // import { BrowserModule } from '@angular/platform-browser';
// // import { FormsModule } from '@angular/forms';

// // import { AppRoutingModule } from './app-routing.module';
// // import { AppComponent } from './app.component';
// // import { ProductsComponent } from './products/products.component';
// // import { ProductDetailComponent } from './product-detail/product-detail.component';
// // import { CustomersComponent } from './customers/customers-component'
// // import { CustomerDetailComponent } from './customers-detail/customers-detail.component';

// // @NgModule({
// //   declarations: [
// //     AppComponent,
// //     ProductsComponent,
// //     ProductDetailComponent,
// //     CustomersComponent,
// //     CustomerDetailComponent
// //   ],
// //   imports: [
// //     BrowserModule,
// //     AppRoutingModule,
// //     FormsModule
// //   ],
// //   providers: [],
// //   bootstrap: [AppComponent]
// // })
// // export class AppModule { }

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { ProductsComponent } from './products/products.component';
// import { ProductDetailComponent } from './product-detail/product-detail.component';
// import { CustomersComponent } from './customers/customers-component'
// import { CustomerDetailComponent } from './customers-detail/customers-detail.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     ProductsComponent,
//     ProductDetailComponent,
//     CustomersComponent,
//     // CustomerDetailComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CustomersComponent } from './customers/customers-component';
import { CustomerDetailComponent } from './customers-detail/customer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    CustomersComponent,
    CustomerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
