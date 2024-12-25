import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';
const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"create",component:CreateComponent},
  {path:"edit/:id",component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
