import { Component } from '@angular/core';
/*import {HttpClient} from '@angular/common/http'; */
import users from '../assets/users.json';
import {Employee} from './model/employee';
import {EmployeeService} from './employee.service';
import {Observable} from 'rxjs';
import {BookService} from './book.service';
import {FruitsService} from './fruits.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project4';
  //Example1 - Reading the text from file
  /*
  val:string="";
  getdata(info:string){
    this.val=info;
  }
  constructor(private http:HttpClient){
    this.http.get("assets/demo.txt",{responseType:'text'}).subscribe(data => console.log(data));
    this.http.get("assets/demo.txt",{responseType:'text'}).subscribe(data=>this.getdata(data));
  }
  */



 //Example2 - Reading from a link 
 /*
 constructor(private http:HttpClient){}
 httpdata:any;
 ngOnInit(){
  this.http.get("http://jsonplaceholder.typicode.com/users").subscribe(data=>this.displaydata(data));;
 }
 displaydata(data:any){
  this.httpdata=data;
 }
 */


 //Example3 - without HttpClientModule importing data from one file to another
 // "resolveJsonModule": true,
 // "esModuleInterop": true,
 // must be declared in tsconfig.json in compiler options
 /* users_read=users; */



 //Example4 - loading data from Json Server
 /*
 employees=new Array<Employee>();
 constructor(empService:EmployeeService){
  
  empService.getEmployees().subscribe(response=>{
      this.employees=response.map(item=>{ return new Employee(item.id,item.name,item.status); });
    });

 }
 */


 //Example5 - observable and observer difference
 /*
 obs=new Observable(observer=>{
  console.log("observable starts");
  setTimeout(()=> {observer.next("1")},1000);
  setTimeout(()=> {observer.next("2")},2000);
  setTimeout(()=> {observer.next("3")},3000);
  setTimeout(()=> {observer.next("4")},4000);
  setTimeout(()=> {observer.next("5")},5000);
  //setTimeout(()=> {observer.error("error emitted")},3500);
  //setTimeout(()=> {observer.complete()},3500);
 });
 data=[];

 ngOnInit(){
  this.obs.subscribe( (val)=>{console.log(val)},
  function(error) {console.log("error");},
  ()=>{console.log("Completed")}
  );
 }
 */

//Example4 - retrieve data from json server
/*
 books:Book[]=[];
 errorMessage:string="";
 constructor(private bookService:BookService){
  this.bookService.getBooks().subscribe(res=>{this.books=res});
 }
 */
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
export interface Book{
  id:number;
  name:string;
  author:string;
}
export interface Fruits{
  id:number;
  name:string;
  price:number;
  quantity:number;
}