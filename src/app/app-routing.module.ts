import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from "./auth/auth/auth.component";

export const routes: Routes = [
  {
    path: 'employee',
    loadChildren: () => import('../app/employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path: 'login',
    component: AuthComponent
  },
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
