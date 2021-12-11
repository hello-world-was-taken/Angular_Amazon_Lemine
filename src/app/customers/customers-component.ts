import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from './customer';
import { CustomersProvider } from './customers-provider';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = CustomersProvider.getCustomers();
  customers2: Customer[] = CustomersProvider.getCustomers();


  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('customers component');
  }

  viewDetail(id: number) {

    // this.router.navigateByUrl('/customers/' + id);
    
    document.getElementById("id")?.setAttribute("placeholder", String((this.customers.find(p=>p.id==id)?.id)!))

    document.getElementById("firstName")?.setAttribute("placeholder", (this.customers.find(p=>p.id==id)?.firstName)!)

    document.getElementById("lastName")?.setAttribute("placeholder", " " + (this.customers.find(p=>p.id==id)?.lastName)!)

    document.getElementById("age")?.setAttribute("value", String((this.customers.find(p=>p.id==id)?.age)!))

    console.log(this.customers.find(p=>p.id==id)?.firstName)
  }


  createCustomerForm(f: NgForm) {
    CustomersProvider.addCustomer({
      id: f.value['id'],
      firstName: f.value['firstname'],
      lastName: f.value['lastName'],
      birthDate: f.value['birthDate'],
      age: f.value['age']
    })
  }

  // deleteCustomer(id: number) {
  //   CustomersProvider.removeCustomer(id);
  //   this.customers = CustomersProvider.getCustomers();
  // }
  
  
  onDelete(id:number){
    this.customers = this.customers.filter(p=>p.id!=id)
  }

  // updateCustomer(id: number, f: NgForm) {
    
    // document.getElementById("id")?.setAttribute("placeholder", String((this.customers.find(p=>p.id==id)?.id)!))

    // document.getElementById("firstName")?.setAttribute("placeholder", (this.customers.find(p=>p.id==id)?.firstName)!)

    // document.getElementById("lastName")?.setAttribute("placeholder", (this.customers.find(p=>p.id==id)?.lastName)!)

    // document.getElementById("age")?.setAttribute("value", String((this.customers.find(p=>p.id==id)?.age)!))

    // console.log(this.customers.find(p=>p.id==id)?.firstName)
    
  // }

  updateCustomerForm(f: NgForm) {
    // // this.customers.filter(p=>p.id==f.value['id'])
    // this.customers.filter(p=>p.id==f.value['id'])[0].firstName = f.value['firstName']
    // this.customers.filter(p=>p.id==f.value['id'])[0].lastName = f.value['lastName']
    // this.customers.filter(p=>p.id==f.value['id'])[0].age = f.value['age']
    console.log(this.customers[0].id)
    this.customers2.find(p=>p.id == this.customers[0].id)!.firstName = f.value['firstName']
    this.customers2.find(p=>p.id == this.customers[0].id)!.lastName = f.value['lastName']
    this.customers2.find(p=>p.id == this.customers[0].id)!.age = f.value['age']

    this.customers = this.customers2

  }

  update(id: number) {
    var temp = id
    // console.log(temp)
    this.customers = this.customers.filter(p=>p.id == id)
    // this.customers[0].id = temp


    document.getElementById("id")?.setAttribute("placeholder", String((this.customers.find(p=>p.id==id)?.id)!))

    document.getElementById("firstName")?.setAttribute("placeholder", (this.customers.find(p=>p.id==id)?.firstName)!)

    document.getElementById("lastName")?.setAttribute("placeholder", (this.customers.find(p=>p.id==id)?.lastName)!)

    document.getElementById("age")?.setAttribute("value", String((this.customers.find(p=>p.id==id)?.age)!))

    // console.log(this.customers.find(p=>p.id==id)?.firstName)

  }


}
