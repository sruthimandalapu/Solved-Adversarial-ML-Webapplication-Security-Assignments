import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'que1';
  sales:Sales[]=[];
  constructor(private http:HttpClient){
    this.http.get<Sales[]>("http://localhost:3000/sales").subscribe((data)=>{this.sales=data});
  }
}
interface Sales{
  Month:string;
  Sales_Figure:number;
  Perc:number;
}
