import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployeeComponent} from "./employee/list/employee.component";

export const routes: Routes = [
  {path: 'employees', component: EmployeeComponent},
  {path: 'employees/:id?', component: EmployeeComponent},
  {path: '', redirectTo: '/employees', pathMatch: 'full'},
  {path: '**', redirectTo: '/employees', pathMatch: 'full'},

  {
    path: 'dashboard',
    loadChildren: () => import('../app/employee/employee.module').then(m => m.EmployeeModule),
    data: {
      isFullScreen: false,
      isPublic: false
    }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
