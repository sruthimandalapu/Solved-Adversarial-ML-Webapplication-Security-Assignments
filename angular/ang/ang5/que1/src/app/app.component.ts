import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'que1';
  val:any;
  getData(data:any){
    this.val=data;
  }
  constructor(private http:HttpClient){
    this.http.get("http://jsonplaceholder.typicode.com/comments").subscribe(data=>this.getData(data));
  }
}
