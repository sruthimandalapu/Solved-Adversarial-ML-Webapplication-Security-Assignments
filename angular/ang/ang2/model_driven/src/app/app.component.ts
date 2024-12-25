import { Component } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'model_driven';
  /*
  customerForm =new FormGroup({
    'name':new FormControl(),
    'street':new FormControl(),
    'city':new FormControl(),
    'zipcode':new FormControl()
  });
  */
  public data={
    'id':100,
    'name':'Sruthi',
    'address':{
      'street':'10, Nehru Nagar',
      'city':'Chennai',
      'zipcode':'600001'
    }
  };
  customerForm:FormGroup;
  constructor(private fb:FormBuilder){
    this.customerForm=this.fb.group({
      id:[this.data.id],
      name:[this.data.name],
      street:[this.data.address.street],
      city:[this.data.address.city],
      zipcode:[this.data.address.zipcode]
    });
  }

}
