import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  title:string='Angular Shadow Batch';
  flag:string="";
  changeTitle(){
    return this.title="Details Changed";
  }
}
