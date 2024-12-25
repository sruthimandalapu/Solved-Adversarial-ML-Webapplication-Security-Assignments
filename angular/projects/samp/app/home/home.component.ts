import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  value:any;
  constructor(private http:HttpClient){
    this.http.get("http://localhost:3000/employees").subscribe((data)=>{this.value=data});
  }
}
