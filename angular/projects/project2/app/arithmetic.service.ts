import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }
  add(num1:number,num2:number):number{
    return parseInt(num1.toString())+parseInt(num2.toString(0));
  }
  subtract(num1:number,num2:number):number{
    return num1-num2;
  }
  multiply(num1:number,num2:number){
    return num1*num2;
  }
  divide(num1:number,num2:number){
    return num1/num2;
  }
}
