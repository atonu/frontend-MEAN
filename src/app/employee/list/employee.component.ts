import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {EmployeeService} from '../../shared/employee.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {Employee} from '../../shared/employee.model';
import {Subscription} from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit, OnDestroy {

  formGroup: FormGroup;
  employees: MatTableDataSource<Employee>;
  displayedColumns: string[] = ['position', 'name', 'salary', 'office', 'action'];
  private $employeeUpdate: Subscription[] = [];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.getData();
    this.initForm();
    this.$employeeUpdate.push(this.employeeService.getEmployeeUpdate().subscribe((employee: Employee) => {
      this.getData();
    }));
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      _id: new FormControl('', []),
      name: new FormControl('', []),
      office: new FormControl('', []),
      salary: new FormControl('', []),
      position: new FormControl('', [])
    })
  }

  setFormValue(ev: Employee) {
    this.formGroup.setValue({
      _id: ev._id || null,
      name: ev.name || '',
      position: ev.position || '',
      office: ev.office || '',
      salary: ev.salary || ''
    })
  }

  getData() {
    this.employeeService.getEmployeeList().subscribe((resp: Employee[]) => {
      console.log(resp);
      this.employees = new MatTableDataSource<Employee>(resp);
    }, error => {
      console.log(error);
    })
  }

  editEmployee(ev: Employee) {
    this.setFormValue(ev);
  }

  deleteEmployee(ev: Employee) {
    if (confirm('sure?') == true) {
      this.$employeeUpdate.push(this.employeeService.deleteEmployee(ev._id).subscribe((res) => {
      }))
    }
  }

  ngOnDestroy(): void {
    this.$employeeUpdate.forEach(item => {
      item.unsubscribe();
    })
  }
}
