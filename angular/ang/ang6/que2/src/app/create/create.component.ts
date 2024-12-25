import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {employees} from '../app.component';
import {Router} from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  Employees:employees={
    id:0,
    firstName:'',
    lastName:''
  };
  constructor(private http:HttpClient,private router:Router){

  }
  submit(){
    alert(this.Employees.firstName);
    this.http.post<employees>("http://localhost:3000/employees",this.Employees).subscribe(
      {
      next:(data)=>{this.router.navigate(["../home"]);},
      error:(err)=>{console.log(err);}
      }
    ); 
  }

}
