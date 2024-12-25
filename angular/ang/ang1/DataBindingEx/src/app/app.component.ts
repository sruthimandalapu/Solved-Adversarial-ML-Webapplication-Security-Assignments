import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataBindingEx';
  heading='Event & Two-Way Data Binding';
  twoWay='This text value is already defined on the source code. This input element rendered it'+
  ' because it is bound to the data. Now if you edit this, the data in the source, then it will change too,'+
  'because the data is bound also to the input element';
  isDisabled=true;
  name='Hide';
  disable(){
    if(this.isDisabled==true){
      this.name='Show';
    }
    else{
      this.name='Hide';
    }
    this.isDisabled=!this.isDisabled;
  }
}
