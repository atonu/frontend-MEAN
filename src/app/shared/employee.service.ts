import {Injectable} from '@angular/core';
import {Employee} from "./employee.model";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Subject} from "rxjs";
import {BaseUrl} from "../../environments/environment";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];
  readonly baseURL = BaseUrl['nodeApi'] + "/employees";
  public x = 0;

  constructor(private  http: HttpClient,
              private authService: AuthService) {
  }

  private employeeUpdate = new Subject<Employee>();


  postEmployee(emp: Employee) {
    return this.http.post(this.baseURL, emp).pipe(map((resp: Employee) => {
      this.employeeUpdate.next(resp);
    }));
  }

  getEmployeeUpdate() {
    return this.employeeUpdate.asObservable();
  }

  putEmployee(emp: Employee) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp).pipe(map((resp: Employee) => {
      this.employeeUpdate.next(resp);

    }));
  }

  getEmployeeList() {
    return this.http.get(this.baseURL, {headers: {'x-access-token': this.authService.getAccessToken() || ''}}).pipe(map(resp => {
      console.log(resp);
      return resp;
    }));
  }

  deleteEmployee(id: string) {
    return this.http.delete(this.baseURL + `/${id}`).pipe(map((resp: Employee) => {
      this.employeeUpdate.next(resp);
    }));
  }

}
