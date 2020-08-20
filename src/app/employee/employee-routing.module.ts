import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeComponent} from './list/employee.component';
export const routes: Routes = [
  {path:'employees', component: EmployeeComponent},
  {path:'employees/:id?', component: EmployeeComponent},
  {path:'', redirectTo: '/employees', pathMatch: 'full'},
  {path:'**', redirectTo: '/employees', pathMatch: 'full'},

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
