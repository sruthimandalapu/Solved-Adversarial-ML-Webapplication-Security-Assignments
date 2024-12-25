import { Component } from '@angular/core';
import {StaffDataService} from './staff-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string="";
  city:string="";
  salary:number=0;
  title = 'StaffManagement';
  staff_obj=new StaffDataService();
  staff_members=this.staff_obj.staffDetails();
  addStaff(){
    this.staff_members.push(new staff(this.name,this.city,this.salary));
  }
}
export class staff{
  staffName:string;
  city:string;
  salary:number;
  constructor(staffName:string,city:string,salary:number){
    this.staffName=staffName;
    this.city=city;
    this.salary=salary;
  }
}
