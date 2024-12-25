import { Component } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import {FormGroup} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive_form_validations';
  angForm:FormGroup;
  constructor(private fb:FormBuilder){
    this.angForm=this.fb.group({
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      confirm_password:['',Validators.required]
    });
  }

}
