import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  @Input() parMsg:string="";
  constructor(){}
  ngOnInit(){
    console.log(this.parMsg);
  }
}
