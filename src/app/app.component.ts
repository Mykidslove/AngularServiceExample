import { Component } from '@angular/core';
import { Customers } from './models/customers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularstatemanagement';

  customer:Customers[]=[];

getCustomer(customer:Customers[]){

  this.customer=customer;

}

}
