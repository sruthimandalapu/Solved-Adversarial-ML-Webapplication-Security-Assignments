import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  value={
    id:0,
    name:'',
    age:0
  }
  constructor(private http:HttpClient,private router:Router) {
    
  }
  submit(){
    this.http.post("http://localhost:3000/employees",this.value).subscribe({ next:(data)=>{this.router.navigate(['/home'])} });
  }
}

