import { Customer } from './customer';

class CustomersProvider {
  
  private static customers: Customer[] = [
    {
      id: 1,
      firstName: 'Hailemariam',
      lastName: 'Arega',
      birthDate: new Date('10/10/2010'),
      age: 20,
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      birthDate: new Date('10/10/2010'),
      age: 20,
    },
    {
      id: 3,
      firstName: 'Mary',
      lastName: 'Doe',
      birthDate: new Date('10/10/2010'),
      age: 20,
    },
    {
      id: 4,
      firstName: 'Mark',
      lastName: 'Doe',
      birthDate: new Date('10/10/2010'),
      age: 20,
    },
  ];

  public static getCustomers(): Customer[] {
    return this.customers;
  }

  public static addCustomer(customer: Customer): void {
    this.customers.push(customer);

    // {
    //   id: f.value['id'],
    //   firstName: f.value['firstname'],
    //   lastName: f.value['lastName'],
    //   birthDate: f.value['birthDate'],
    //   age: f.value['age']
    // }
  }

  public static removeCustomer(id: number): void {
    this.customers = this.customers.filter((customer) => customer.id !== id);
  }

  public static updateCustomer(customer: Customer): void {
    this.customers = this.customers.map((c) =>
      c.id === customer.id ? customer : c
    );
  }

  public static getCustomer(id: number): Customer | undefined {
    return this.customers.find((customer) => customer.id === id);
  }
}
export { CustomersProvider };
