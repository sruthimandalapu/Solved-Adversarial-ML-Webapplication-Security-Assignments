import { Component } from '@angular/core';

@Component({
  selector: 'app-birthday-records',
  templateUrl: './birthday-records.component.html',
  styleUrls: ['./birthday-records.component.css']
})
export class BirthdayRecordsComponent {
  peopleList=[
    {'personName':'Rhianna Johnson','dateOfBirth':'11/30/2011'},
    {'personName':'Aiden Shaw','dateOfBirth':'09/16/1992'},
    {'personName':'Trevon Floyd','dateOfBirth':'01/16/1992'},
    {'personName':'Melanie Yates','dateOfBirth':'12/12/2001'},
    {'personName':'Chris Andrews','dateOfBirth':'02/09/1891'},
    {'personName':'Jacinda Miller','dateOfBirth':'12/01/1982'},
    {'personName':'Will Davis','dateOfBirth':'11/30/2011'},
    {'personName':'Eliza Baxter','dateOfBirth':'10/31/1999'},
  ]
  ageRadio = false;
  nameRadio = false;
  nameSort() {
    this.nameRadio = !this.nameRadio;
    this.ageRadio = false;
    //this.peopleList.sort((a, b) => (this.nameRadio ? a.personName.localeCompare(b.personName) : b.personName.localeCompare(a.personName)));
    this.peopleList.sort((a, b) => (a.personName.localeCompare(b.personName)));
  }
  dateSort() {
    this.ageRadio = !this.ageRadio;
    this.nameRadio = false;
    //this.peopleList.sort((a, b) => (this.ageRadio ? new Date(a.dateOfBirth).getTime() - new Date(b.dateOfBirth).getTime() : new Date(b.dateOfBirth).getTime() - new Date(a.dateOfBirth).getTime()));
    this.peopleList.sort((a, b) => (new Date(a.dateOfBirth).getTime() - new Date(b.dateOfBirth).getTime()));
  }
}
