import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  parentMessage:string="Message coming from Parent";
  path="./favicon.ico";
  value="this is a span value";
  onClick(){
    alert("hii! ");
  }


  fullName:string="sruthi";
  people:any[]=[
    {"name":"sruthi","age":21,"country":"us"},
    {"name":"siri","age":45,"country":"uk"},
    {"name":"aari","age":11,"country":"india"},
    {"name":"tarun","age":14,"country":"australia"}
  ]
  //example for ngIf Directive
  isValid:boolean=true;
  ChangeData(valid:boolean){
    this.isValid=valid;
  }
  //example for ngFor Directive
  public dropDownValue="";
  SetDropDownValue(drpValue:any){
    this.dropDownValue=drpValue.target.value;
  }
  //example for ngStyle Directive
  AddButtonCSSStyles(){
    let CssStyles={
      'color':'red',
      'font-weight':'bold',
      'font-size.px':59
    };
    return CssStyles;
  }
  //example for ngClass Directive
  AddCSSClasses(flag:string){
    let classstyles1={'one':true,'two':true,'three':true};
    let classstyles={'one':false,'two':true,'three':true};
    if(flag=="type1")
    return classstyles;
    else
    return classstyles1;
  }
}
