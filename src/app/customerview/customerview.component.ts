import { Component, Input, OnInit } from "@angular/core";
import { CustomerService } from "../customer.service";
import { Customers } from "../models/customers";

@Component({
  selector: 'app-customerview',
  templateUrl: './customerview.component.html',
  styleUrls: ['./customerview.component.css']
})
export class CustomerviewComponent implements OnInit {

  
 
 

  constructor(private customerservice:CustomerService) { }

  customer:Customers[]=[];

  ngOnInit(): void {

       this.customer=this.customerservice.getinput();
  }

 

}
