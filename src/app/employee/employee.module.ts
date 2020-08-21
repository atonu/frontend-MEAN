import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeComponent} from './list/employee.component';
import {EmployeeService} from '../shared/employee.service';
import {EmployeeRoutingModule, routes} from './employee-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {HttpClientModule} from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {FormComponent} from './form/form.component';
import {LiveComponent} from './live/live.component';
import {BaseComponent} from './base/base.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonToggleModule} from "@angular/material/button-toggle";


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
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatTabsModule,
    MatButtonToggleModule,

  ],
  providers: [EmployeeService]
})
export class EmployeeModule {
}
