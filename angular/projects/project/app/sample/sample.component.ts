import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {
  myData:string="User Defined Component";
  Name:string="sruthi";
  Branch:string="XYZ";
  Mobile:number=9383883289;
  Gender:string="Female";
  Age:number=22;
}
