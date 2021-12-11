import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customers/customer';
import { CustomersProvider } from '../customers/customers-provider';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.customer = CustomersProvider.getCustomer(param['id']);
    });
  }

  updateCustomer(f: NgForm) {
    if (this.customer) {
      this.customer.firstName = f.value.fiirstName;
      this.customer.lastName = f.value.lastName;
      this.customer.age = f.value.age;
      this.customer.birthDate = f.value.birthDate;
      CustomersProvider.updateCustomer(this.customer);
    }
  }

  deleteCustomer() {
    if (this.customer) {
      CustomersProvider.removeCustomer(this.customer.id);
      this.router.navigateByUrl('');
    }
  }
}
