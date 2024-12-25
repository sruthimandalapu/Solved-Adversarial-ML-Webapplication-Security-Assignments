import { Component } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {Fruits} from '../app.component';
import { FruitsService } from '../fruits.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  fruitForm:Fruits={
    id:0,
    name:'',
    price:0,
    quantity:0,
  };
  constructor(private fruitService:FruitsService,private router:Router,private route:ActivatedRoute){

  }
  ngOnInit(){
    this.route.paramMap.subscribe(
      (param)=>{var id=Number(param.get('id')); this.getById(id);}
    );
  }
  getById(id:number){
    this.fruitService.getById(id).subscribe(
      (data)=>{this.fruitForm=data;}
    );
  }
  update(){
    this.fruitService.update(this.fruitForm).subscribe({
      next:(data)=>{this.router.navigate(["/home"])},
      error:(err)=>{console.log(err)}
    });
  }

}
