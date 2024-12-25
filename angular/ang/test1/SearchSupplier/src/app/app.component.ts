import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SearchSupplier';
  name:string="";
  supplierData=[{supplierID: 100, supplierName: "Microsoft", city: "Redmond", state: "Washington"},
  {supplierID: 200, supplierName: "Google", city: "Mountain View", state: "Californa"},
  {supplierID: 300, supplierName: "Oracle", city: "Redwood City", state: "California"},
  {supplierID: 400, supplierName: "Kimberly-Clark", city: "Irving", state:"Texas"},
  {supplierID: 500, supplierName: "Tyson Foods", city: "Springdale", state:"Arkansas"}, 
  {supplierID: 600, supplierName: "SC Johnson", city: "Racine", state:"Wisconsin"},
  {supplierID: 700, supplierName: "Dole Food Company", city: "Westlake Village", state: "California"},
  {supplierID: 800, supplierName: "Flowers Food", city: "Thomasville", state:"Georgia"},
  {supplierID: 900, supplierName: "Electronic Arts", city: "Redwood City", state: "California"}];
}
