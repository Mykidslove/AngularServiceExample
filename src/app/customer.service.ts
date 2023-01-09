 
 import { Injectable } from '@angular/core';
import { Customers } from './models/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }


customer:Customers[]=[];
add(customer_name:string){
  const customers=new Customers();
  customers.name=customer_name
    this.customer.push(customers);
    

}

getinput(){

  return this.customer;
}

}