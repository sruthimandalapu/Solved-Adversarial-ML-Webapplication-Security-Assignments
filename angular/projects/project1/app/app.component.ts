import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {FormGroup,FormControl} from '@angular/forms';
import {FormBuilder,Validators} from '@angular/forms';
import {TitlePipe} from './title.pipe';
import {AgePipe} from './age.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';

  //Template Driven Form
  /*
  RegisterStudent(studentForm:NgForm){
    console.log(studentForm.value);
    alert(studentForm.value);
    alert("The student name is: "+studentForm.controls['firstName'].value);
  }
  */

 //Reactive Form
 /*
 contactForm=new FormGroup({
  firstname:new FormControl(),
  lastname:new FormControl(),
  email:new FormControl(),
  gender:new FormControl(),
  isMarried:new FormControl(),
  country:new FormControl()
 });
 onSubmit(){
  alert(this.contactForm.value);
  alert(this.contactForm.controls.firstname.value);
 }
 */

  //Reactive form Validations
  /*
  angForm:FormGroup;
  constructor(private fb:FormBuilder){
    this.angForm=this.fb.group({
      name:['',Validators.required],
      address:['',Validators.required]
    });
  }
  */

  //Template Driven form Validations
  /*
  formData:any;
  handleSubmit(e:FormData){
    this.formData={...e};
  }
  */

  //pipe concepts
  /*
  students:any[]=[
    {ID:'std01',Name:'Sruthi',DOB:'05/28/2001',Gender:'Female',CourseFee:8328.45},
    {ID:'std02',Name:'Aari',DOB:'12/20/2010',Gender:'Female',CourseFee:7782.83},
    {ID:'std03',Name:'George',DOB:'05/30/2003',Gender:'Male',CourseFee:3728.83},
    {ID:'std04',Name:'Swarup',DOB:'09/09/1997',Gender:'Male',CourseFee:9268.83},
    {ID:'std05',Name:'Lekhana',DOB:'02/02/1990',Gender:'Female',CourseFee:2799.83}
  ];
  today:number=Date.now();       //Data Pipe
  salary:number=123456723.50;    //Currency Pipe
  */

  //user defined pipes
  students:any[]=[
    {ID:'std01',Name:'Sruthi',DOB:'05/28/2001',Gender:'Female',CourseFee:8328.45},
    {ID:'std02',Name:'Aari',DOB:'12/20/2010',Gender:'Female',CourseFee:7782.83},
    {ID:'std03',Name:'George',DOB:'05/30/2003',Gender:'Male',CourseFee:3728.83},
    {ID:'std04',Name:'Swarup',DOB:'09/09/1997',Gender:'Male',CourseFee:9268.83},
    {ID:'std05',Name:'Lekhana',DOB:'02/02/1990',Gender:'Female',CourseFee:2799.83}
  ];
}
