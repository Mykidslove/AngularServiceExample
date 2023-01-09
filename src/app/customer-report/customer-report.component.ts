import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customers } from '../models/customers';

@Component({
  selector: 'app-customer-report',
  templateUrl: './customer-report.component.html',
  styleUrls: ['./customer-report.component.css']
})
export class CustomerReportComponent implements OnInit {

  constructor(private customerservice:CustomerService) { }

  customer:Customers[]=[];

  ngOnInit(): void {

    this.customer=this.customerservice.getinput();
  }

}
