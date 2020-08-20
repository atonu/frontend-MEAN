import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent} from "./employee/list/employee.component";

export const routes: Routes = [
  {path:'employees', component: EmployeeComponent},
  {path:'employees/:id?', component: EmployeeComponent},
  {path:'', redirectTo: '/employees', pathMatch: 'full'},
  {path:'**', redirectTo: '/employees', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
