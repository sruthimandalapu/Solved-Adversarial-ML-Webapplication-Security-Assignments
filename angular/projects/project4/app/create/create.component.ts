import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {FruitsService} from '../fruits.service';
import {Fruits} from '../app.component';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  fruitForm:Fruits={
    id:0,
    name:'',
    price:0,
    quantity:0
  };
  constructor(private fruitService:FruitsService,private router:Router){

  }
  create(){
    this.fruitService.create(this.fruitForm).subscribe({
      next:(data)=>{this.router.navigate(["/home"])},
      error:(err)=>{console.log(err)}
    });
  }
}
