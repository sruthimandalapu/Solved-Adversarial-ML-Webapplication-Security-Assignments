import { Component } from '@angular/core';
import {employees} from '../app.component';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  emp:employees[]=[];
  constructor(private http:HttpClient){
    this.http.get<employees[]>("http://localhost:3000/employees").subscribe((data)=>{this.emp=data});
  }
}
