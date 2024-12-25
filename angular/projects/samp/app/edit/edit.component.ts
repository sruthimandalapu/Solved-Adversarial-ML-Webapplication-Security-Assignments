import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  value={
    id:0,
    name:"",
    age:0
  };
  id=0;
  constructor(private http:HttpClient,private router:Router,private act:ActivatedRoute){
    this.act.paramMap.subscribe((param)=>{this.id=Number(param.get('id'));});
    alert(this.id);
    this.http.get<Employees>(`http://localhost:3000/employees/${this.id}`).subscribe((data)=>{this.value=data;});
  }
  submit(){
    this.http.put<Employees>(`http://localhost:3000/employees/${this.id}`,this.value).subscribe({
      next:(data)=>{this.router.navigate(['/home']);}
    });
  }
}
interface Employees{
  id:number,
  name:string,
  age:number
}
