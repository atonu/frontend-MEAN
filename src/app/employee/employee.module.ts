import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeComponent} from './list/employee.component';
import {EmployeeService} from '../shared/employee.service';
import {EmployeeRoutingModule, routes} from './employee-routing.module';
import {FormComponent} from './form/form.component';
import {LiveComponent} from './live/live.component';
import {BaseComponent} from './base/base.component';
import {MaterialModule} from "../shared/material/material.module";


@NgModule({
  declarations: [
    EmployeeComponent,
    FormComponent,
    LiveComponent,
    BaseComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MaterialModule
  ],
  providers: [EmployeeService],
  exports: [
  ]
})
export class EmployeeModule {
}
