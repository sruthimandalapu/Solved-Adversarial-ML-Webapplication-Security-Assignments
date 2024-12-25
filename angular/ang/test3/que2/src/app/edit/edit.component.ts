import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  value={
    id:0,
    name:"",
    passengers:0,
    charge:0,
    boarding:"",
    destination:""
  };
  id=0;
  constructor(private http:HttpClient,private router:Router,private act:ActivatedRoute){
    this.act.paramMap.subscribe((param)=>{this.id=Number(param.get('id'));});
    this.http.get<Tickets>(`http://localhost:3000/tickets/${this.id}`).subscribe((data)=>{this.value=data;});
  }
  submit(){
    this.http.put<Tickets>(`http://localhost:3000/tickets/${this.id}`,this.value).subscribe({
      next:(data)=>{this.router.navigate(['/home']);}
    });
  }
}
interface Tickets{
  id:number;
  name:string;
  passengers:number;
  charge:number;
  boarding:string;
  destination:string;
}
