import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subject, Subscription} from "rxjs";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {EmployeeService} from "../../shared/employee.service";
import {Employee} from "../../shared/employee.model";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  private $employeeUpdate: Subscription[] = [];
  formGroup: FormGroup;
  @Input() update = new Subject<Employee>();
  $subscribeUpdate = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.initForm();
    this.update.subscribe((employee: Employee)=> {
      console.log(employee);
      this.setFormValue(employee);
    })
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
  setFormValue(res: Employee){
    this.formGroup.patchValue({
      _id: res._id,
      name: res.name,
      office: res.office,
      salary: res.salary,
      position: res.position
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
