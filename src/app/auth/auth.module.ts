import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MaterialModule} from "../shared/material/material.module";
import { AuthComponent } from './auth/auth.component';
import {RouterModule} from "@angular/router";
import {AuthRouterModule} from "./auth-router.module";

@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    AuthRouterModule
  ]
})
export class AuthModule { }
