import { Component } from '@angular/core';
import data from './db.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ass2';
  val=data;
  addStyle1(data:any){
    var cssstyle={'background-color':data.color};
    return cssstyle;
  }
}
