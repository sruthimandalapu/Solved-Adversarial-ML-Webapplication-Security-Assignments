import { Component } from '@angular/core';
import {ProductService} from './product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product_service';
  products:any[];
  constructor(){
    this.products=[];
  }
  get_products(){
    this.products=(new ProductService()).getProducts();
  }
}
export class Product{
  id:number;
  name:string;
  cost:number;
  rating:number;
  constructor(id:number,name:string,cost:number,rating:number){
    this.id=id;
    this.name=name;
    this.cost=cost;
    this.rating=rating;
  }
}
