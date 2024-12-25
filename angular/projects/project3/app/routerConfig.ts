import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AboutComponent} from './about/about.component';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
const appRoutes:Routes=[
    {path:'home',component:HomeComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'about',component:AboutComponent},
    {path:'first',component:FirstComponent},
    {path:'second',component:SecondComponent}
];
export default appRoutes;