// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'ecommerce-app';
// }

import { Component } from '@angular/core';
import { PRODUCTS } from './products/products.object';
import { Product } from './products/products.object';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Libra';


  productList = PRODUCTS;
  productList2 = PRODUCTS;

  search(event: any) {
    this.productList = this.productList2
    let query: string = event.target.value
    query = query.trim()
    let len = query.length
    let searchList: Product[] = []
    this.productList = this.productList.filter(p=> 
      {
        // console.log(p.name.substring(0, len) == query)
        if(p.name.toLowerCase().includes(query)) {
          searchList.push(p)
        }
      }
      )
    this.productList = searchList
    console.log(this.productList)
  }
}
