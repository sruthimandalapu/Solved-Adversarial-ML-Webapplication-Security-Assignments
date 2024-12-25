import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';;
import {Validators,FormBuilder,FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  myForm: FormGroup;
  formSubmitted=false;
  constructor() {
    this.myForm = new FormGroup({
      myControl: new FormControl('', Validators.required)
    });
  }
  onSubmitted(){
    this.formSubmitted=true;
  }
  /*
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      myControl: new FormControl('',[ Validators.required]),
    });
  }

  */
  
  
}

