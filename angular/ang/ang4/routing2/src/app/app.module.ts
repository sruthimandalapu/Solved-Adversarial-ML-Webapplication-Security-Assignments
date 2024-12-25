import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Mod1Component } from './mod1/mod1.component';
import { Mod2Component } from './mod2/mod2.component';
import { Mod3Component } from './mod3/mod3.component';

@NgModule({
  declarations: [
    AppComponent,
    Mod1Component,
    Mod2Component,
    Mod3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    //RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
