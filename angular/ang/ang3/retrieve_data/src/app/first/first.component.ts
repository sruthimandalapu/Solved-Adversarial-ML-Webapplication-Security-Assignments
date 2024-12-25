import { Component } from '@angular/core';
import {DataService} from '../data.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  name:string="";
  first_submit(){
    (new DataService()).setData(this.name);
  }
}
