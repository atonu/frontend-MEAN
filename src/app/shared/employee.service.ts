import { Injectable } from '@angular/core';
import {Employee} from "./employee.model";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];
  readonly baseURL ="http://localhost:3000/employees"

  constructor(private  http: HttpClient) { }


  postEmployee(emp : Employee){
    return this.http.post(this.baseURL,emp).pipe(map(resp=>{
    }));
  }
  putEmployee(emp : Employee){
    return this.http.put(this.baseURL + `/${emp._id}`,emp).pipe(map(resp=>{
    }));
  }
  getEmployeeList() {
    return this.http.get(this.baseURL).pipe(map(resp => {
      return resp;
    }));
  }
  deleteEmployee(id : string){
    return this.http.delete(this.baseURL + `/${id}`).pipe(map(resp=>{
    }));
  }

  editEmployee(emp : Employee){
    return this.http.post(this.baseURL,emp).pipe(map(resp=>{
    }));
  }

}
