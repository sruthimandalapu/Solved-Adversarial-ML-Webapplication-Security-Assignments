import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ValidatePipe } from './validate.pipe';
import {EmployeeService} from './employee.service';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
@NgModule({
  declarations: [
    AppComponent,
    ValidatePipe,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
