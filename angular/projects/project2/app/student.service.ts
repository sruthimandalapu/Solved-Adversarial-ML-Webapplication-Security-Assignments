import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  getTitle(){
    return "Dependency Injection in Angular";
  }
  getStudents():any[]{
    return [
      {ID:'std01',FirstName:'Sruthi',LastName:'Mandalapu',Branch:'IT',DOB:'28/05/2001',Gender:'Female'},
      {ID:'std02',FirstName:'Sireesha',LastName:'Mandalapu',Branch:'CSE',DOB:'20/11/1977',Gender:'Female'},
      {ID:'std03',FirstName:'Karun',LastName:'Yadav',Branch:'ECE',DOB:'12/02/1990',Gender:'Male'},
      {ID:'std04',FirstName:'Krithika',LastName:'Akshi',Branch:'EEE',DOB:'08/09/1968',Gender:'Female'},
      {ID:'std05',FirstName:'Rachana',LastName:'Goud',Branch:'CIV',DOB:'13/12/2002',Gender:'Female'},
      {ID:'std06',FirstName:'Samnith',LastName:'Kasi',Branch:'MECH',DOB:'03/06/2005',Gender:'Male'}
    ];
  }
}
