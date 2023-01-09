import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomeraddComponent } from './customeradd/customeradd.component';
import { CustomerviewComponent } from './customerview/customerview.component';
import { CustomerReportComponent } from './customer-report/customer-report.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomeraddComponent,
    CustomerviewComponent,
    CustomerReportComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
