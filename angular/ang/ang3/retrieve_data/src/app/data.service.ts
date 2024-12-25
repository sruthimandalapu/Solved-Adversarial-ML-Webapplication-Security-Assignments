import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  static data:string;
  setData(data1:string){
    DataService.data=data1;
  }
  getData(){
    return DataService.data;
  }
}
