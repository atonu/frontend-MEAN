import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {
  private $employeeUpdate: Subscription[] = [];
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      email: new FormControl('', []),
      password: new FormControl('', [])
    })
  }

  onSubmit() {
    this.authService.login(this.formGroup.controls['email'].value, this.formGroup.controls['password'].value).subscribe((resp)=> {
      console.log(`Login successful| ${resp}`);
    })
  }



  resetForm() {
    this.formGroup.setValue({
      email: "",
      password: ""
    })
  }

  logout() {
    this.authService.removeSession();
  }

  ngOnDestroy(): void {
    this.$employeeUpdate.forEach(item => {
      item.unsubscribe();
    })
  }

}
