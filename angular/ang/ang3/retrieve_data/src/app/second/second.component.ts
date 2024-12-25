import { Component } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  name:string="";
  second_submit(){
    this.name=(new DataService()).getData();
  }
}
