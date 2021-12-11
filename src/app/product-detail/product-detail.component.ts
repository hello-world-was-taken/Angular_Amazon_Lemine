import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product, PRODUCTS } from '../products/products.object';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  selectedProduct: Product | undefined = undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
        this.selectedProduct = PRODUCTS.find(value=>value.id==param['id'])
      }
    )
  }

  updateProduct(f:NgForm) {
    if (this.selectedProduct) {
      console.log("Product Updated", f.value);
      this.selectedProduct.name = f.value.name;
      this.selectedProduct.price = f.value.price;
    }
  }

}
