import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MaterialModule} from "../shared/material/material.module";
import { AuthComponent } from './auth/auth.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class AuthModule { }
