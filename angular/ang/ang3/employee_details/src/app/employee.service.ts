import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees():any[]{
    return [
      {"id":1,"name":"Adarsh","age":15},
      {"id":2,"name":"Ayush","age":24},
      {"id":3,"name":"Dhruv","age":18},
      {"id":4,"name":"Manish","age":9},
      {"id":5,"name":"Zaheer","age":20},
      {"id":6,"name":"Mrunali","age":10},
      {"id":7,"name":"Sangeetha","age":29}
    ];
  }
}
