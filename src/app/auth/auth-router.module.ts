import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";

let routes: Routes = [
  {
    path: 'registration', component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRouterModule { }
