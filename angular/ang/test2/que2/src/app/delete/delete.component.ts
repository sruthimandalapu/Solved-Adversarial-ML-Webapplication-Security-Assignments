import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  id:number=0;
  constructor(private http:HttpClient,private router:Router,private act:ActivatedRoute){
    this.act.paramMap.subscribe((param)=>{this.id=Number(param.get('id'));});
    this.http.delete(`http://localhost:3000/tickets/${this.id}`).subscribe({
      next:()=>{this.router.navigate(['/home']);alert("Deleted Successfully")}
    }); 
  }
}

