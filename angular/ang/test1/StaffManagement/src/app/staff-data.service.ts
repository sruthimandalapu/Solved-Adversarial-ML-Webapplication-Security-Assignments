import { Injectable } from '@angular/core';
import {staff} from './app.component';
@Injectable({
  providedIn: 'root'
})
export class StaffDataService {

  constructor() { }
  staffDetails(){
    return [
      new staff("Jackson","Bangalore",2000),
      new staff("David","Hyderabad",2500),
      new staff("Kali","Chennai",3500),
      new staff("Boyer","Bangalore",2400),
      new staff("Daniel","Pune",3200),
      new staff("Maria","Hyderabad",2100),
      new staff("Mohammed","Chennai",1900),
      new staff("Kranthi","Pune",2600)
    ];
  }
}
