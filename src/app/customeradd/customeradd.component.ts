import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customers } from '../models/customers';

@Component({
  selector: 'app-customeradd',
  templateUrl: './customeradd.component.html',
  styleUrls: ['./customeradd.component.css']
})
export class CustomeraddComponent implements OnInit {


  


  constructor(private customerservice:CustomerService) { }

  ngOnInit(): void {
  }
  addCustomer(customer_name:string){

    this.customerservice.add(customer_name);

    
  
  }

  

}
