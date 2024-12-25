import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template_driven';
  public data={
    'id':100,
    'name':'Sruthi',
    'address':{
      'street':'10, Nehru Nagar',
      'city':'Chennai',
      'zipcode':'600001'
    }
  };
}
