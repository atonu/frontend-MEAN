import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from "./auth/auth/auth.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";

export const routes: Routes = [
  {
    path: 'employee',
    loadChildren: () => import('../app/employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule)
  },
  /*{
    path: 'auth',
    component: AuthComponent
  },*/
  {
    path: '', redirectTo: 'employee', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
