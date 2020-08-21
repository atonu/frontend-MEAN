import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeComponent} from './list/employee.component';
import {BaseComponent} from "./base/base.component";
import {FormComponent} from "./form/form.component";
import {LiveComponent} from "./live/live.component";

export const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {path: 'live', component: LiveComponent},
      {path: 'form', component: FormComponent},
      {path: 'list', component: EmployeeComponent},
      {path: '', redirectTo: 'live', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {
}
