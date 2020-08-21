import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {EmployeeService} from "../../shared/employee.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  private  $employeeUpdate: Subscription[] = [];
  formGroup: FormGroup;

  constructor(
    private  formBuilder: FormBuilder,
    private  employeeService: EmployeeService) {
  }

  ngOnInit(): void {
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

  onSubmit() {
    if (this.formGroup.controls['_id'].value) {
      this.$employeeUpdate.push(this.employeeService.putEmployee(this.formGroup.getRawValue()).subscribe((res) => {
        this.resetForm();
      }))
    } else {
      this.$employeeUpdate.push(this.employeeService.postEmployee(this.formGroup.getRawValue()).subscribe((res) => {
        this.resetForm();
      }))
    }
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
  ngOnDestroy(): void {
    this.$employeeUpdate.forEach(item => {
      item.unsubscribe();
    })
  }

}
