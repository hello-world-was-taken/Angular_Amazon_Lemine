import { Component, OnInit } from '@angular/core';
import { Product, PRODUCTS } from './products.object';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Carted } from './carted.object';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // product: Product = {
  //   id:1,
  //   name:'Jordan 1',
  //   price:2000,
  //   imageUrl:'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  //   description:'Nike Air Max 90 Mens'
  // }
  productList = PRODUCTS;
  productList2 = PRODUCTS;
  nikeCarted = 0
  adidasCarted = 0
  public cartedList: Carted[] = []
  public totalPrice = 0

  
  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log('Products Component Init');
  }

  onViewDetail(id:number){
    // this.router.navigateByUrl('/products/' + id); 
    console.log("hello")
    this.productList = this.productList.filter(p=>p.id == id)
  }
  onDelete(id:number){
    this.productList = this.productList.filter(p=>p.id!=id)
  }

  updateProduct(f: NgForm) {
    this.productList2.find(p=>p.name == this.productList[0].name)!.name = f.value['name']
    this.productList2.find(p=>p.price == this.productList[0].price)!.price = f.value['price']

    // this.productList[0].name = f.value['name']
    // this.productList[0].price = f.value['price']

    this.productList = this.productList2

  }

  search(event: any) {
    this.productList = this.productList2
    let query: string = event.target.value
    query = query.trim()
    let len = query.length
    let searchList: Product[] = []
    this.productList = this.productList.filter(p=> 
      {
        console.log(p.name.substring(0, len) == query)
        if(p.name.toLowerCase().includes(query)) {
          searchList.push(p)
        }
      }
      )
    this.productList = searchList
    console.log(this.productList)
  }

  addToCart(id: number, name: string, price: number) {
    // if (this.cartedList != undefined) {
    //   this.cartedList = this.productList.find(p=> p.id == id)
    // }
    // this.productList.find(p=> p.id == id)!
    this.cartedList!.push({
      id: id, name: name, price: price
    })
    this.totalPrice += price
    // console.log(this.cartedList?.length)
  }

  remove(id: number) {
    let temp = this.cartedList.find(p=>p.id == id)
    this.totalPrice -= temp!.price
    this.cartedList = this.cartedList.filter(p=> p.id != id)
  }
}
