import { Component } from '@angular/core';
import {Fruits} from '../app.component';
import {FruitsService} from '../fruits.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  //Example6 - updating the data on a json server
  allFruits:Fruits[]=[];
  constructor(private fruitsService:FruitsService){
  }
  ngOnInit(){
    this.get();
  }
  get(){
    this.fruitsService.get().subscribe((data)=>{this.allFruits=data;});
  }
}
