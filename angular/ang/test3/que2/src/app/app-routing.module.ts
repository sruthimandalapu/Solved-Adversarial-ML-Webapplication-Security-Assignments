import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EditComponent} from './edit/edit.component';
import {DeleteComponent} from './delete/delete.component';
const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"edit/:id",component:EditComponent},
  {path:"delete/:id",component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
