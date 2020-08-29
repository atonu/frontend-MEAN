import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  constructor(private authService: AuthService,
              private  router: Router) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }
}
