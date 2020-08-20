import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployeeService} from "../shared/employee.service";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {Employee} from "../shared/employee.model";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  formGroup: FormGroup;
  employees: MatTableDataSource<Employee>;
  displayedColumns: string[] = ['position', 'name', 'salary', 'office', 'action'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private  formBuilder: FormBuilder,
    private  employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.getData();
    this.initForm();
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

  resetForm() {
    this.formGroup.setValue({
      _id: "",
      name: "",
      position: "",
      office: "",
      salary: "",
    })
  }

  onSubmit() {
    if (this.formGroup.controls['_id'].value) {
      this.employeeService.putEmployee(this.formGroup.getRawValue()).subscribe((res) => {
        this.resetForm();
        this.getData();
      })
    } else {
      this.employeeService.postEmployee(this.formGroup.getRawValue()).subscribe((res) => {
        this.resetForm();
        this.getData();
      })
    }
  }

  getData() {
    this.employeeService.getEmployeeList().subscribe((resp: Employee[]) => {
      this.employees = new MatTableDataSource<Employee>(resp);
    })
  }

  editEmployee(ev: Employee) {
    this.setFormValue(ev);
  }

  deleteEmployee(ev: Employee) {
    if (confirm('sure?') == true) {
      this.employeeService.deleteEmployee(ev._id).subscribe((res) => {
        this.getData();
      })
    }
  }


}
