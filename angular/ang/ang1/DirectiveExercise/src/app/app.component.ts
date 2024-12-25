import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DirectiveExercise';
  users=[
    {"id":1,"label":"Fabico","age":15,"gender":"M","url":"http://www.fabiobiondi.com"},
    {"id":2,"label":"Filippo","age":22,"gender":"M","url":"http://www.google.com"},
    {"id":3,"label":"Silvia","age":55,"gender":"F","url":"http://www.apple.com"},
    {"id":5,"label":"Fabiola","age":35,"gender":"F","url":"http://www.apple.com"}
  ];
  addStyle(person:any){
    let styling:any;
    if(person.gender=="M")
      styling={'color1':true};
    else
      styling={'color2':true};
    return styling;
  }
}
