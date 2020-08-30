import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
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
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
  onSubmit() {
     this.authService.register(
       this.formGroup.controls['name'].value,
       this.formGroup.controls['email'].value,
       this.formGroup.controls['phone'].value,
       this.formGroup.controls['password'].value
     ).subscribe((resp)=> {
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
