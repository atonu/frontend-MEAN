import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployeeService} from "../shared/employee.service";
import {NgForm} from "@angular/forms";
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

  constructor(private  employeeService: EmployeeService) { }
  employees: MatTableDataSource<Employee>;
  displayedColumns: string[] = ['position', 'name', 'salary', 'office'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.getData();
  }

  onSubmit(formData: NgForm) {
    let payload = {
      "name": formData.value.name,
      "position": formData.value.position,
      "office": formData.value.office,
      "salary": formData.value.salary,
    }
    // this.employeeService.postEmployee(payload).subscribe((res) => {})
    this.employeeService.postEmployee(formData.value).subscribe((res) => {
      console.log(res);
    })

  }

  getData(){
    this.employeeService.getEmployeeList().subscribe((resp: Employee[]) => {
      console.log(resp);
      this.employees = new MatTableDataSource<any>(resp);
    })
  }


}
