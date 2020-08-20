import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormBuilder} from "@angular/forms";
import {EmployeeModule} from './employee/employee.module';
import { EmployeeRoutingModule } from './employee/employee-routing.module';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EmployeeModule,
    EmployeeRoutingModule,
    AppRoutingModule

  ],
  providers: [
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
