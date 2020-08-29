import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private $employeeUpdate: Subscription[] = [];
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
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
      console.log('Login successful');
      console.log(resp);
      this.router.navigate(['./employee']);
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
