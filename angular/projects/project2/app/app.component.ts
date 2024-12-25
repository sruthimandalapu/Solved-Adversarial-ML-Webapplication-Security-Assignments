import { Component } from '@angular/core';
import {StudentService} from './student.service';
import {ArithmeticService} from './arithmetic.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[StudentService]
})
export class AppComponent {
  /*
  title:string;
  students:any[];
  //can be declared using constructor
  constructor(private _StudentService: StudentService){
    this.students=[];
    this.title="";
  }
  //private _StudentService=new StudentService();
  ngOnInit(){
    this.students=this._StudentService.getStudents();
    this.title=this._StudentService.getTitle();
  }
  */

  num1:number=0;
  num2:number=0;
  result:number=0;
  _calculate=new ArithmeticService();
  add(){
    this.result=this._calculate.add(this.num1,this.num2);
  }
  sub(){
    this.result=this._calculate.subtract(this.num1,this.num2);
  }
  mul(){
    this.result=this._calculate.multiply(this.num1,this.num2);
  }
  div(){
    this.result=this._calculate.divide(this.num1,this.num2);
  }
}
