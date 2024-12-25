import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Mod1Component} from './mod1/mod1.component';
import {Mod2Component} from './mod2/mod2.component';
import {Mod3Component} from './mod3/mod3.component';
const routes: Routes = [
  {path:'mod1',component:Mod1Component},
  {path:'mod2',component:Mod2Component},
  {path:'mod3',component:Mod3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
