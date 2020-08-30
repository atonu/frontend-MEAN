import { Component, OnInit } from '@angular/core';
import {Employee} from "../../shared/employee.model";
import {Subject} from "rxjs";

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent implements OnInit {
  employeeUpdate = new Subject<Employee>();
  constructor() { }

  ngOnInit(): void {
  }
  processAction(event){
    this.employeeUpdate.next(event);
  }

}
