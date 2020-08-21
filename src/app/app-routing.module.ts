import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

export const routes: Routes = [
  {
    path: 'employee',
    loadChildren: () => import('../app/employee/employee.module').then(m => m.EmployeeModule)
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
