import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseUrl} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {
baseUrl = BaseUrl.nodeApi+ '/auth';
  constructor(private http: HttpClient) { }

  login(email: String, password: String) {
    return this.http.post(this.baseUrl + "/login", {email, password}, {observe: 'response', headers: {'_id': '5f44519a59b8ae4db03546f9', 'x-refresh-token': 'b0c2ba2047e943ac14d121c5cc564290469c88ce1ad9d2d4a2d25f00be34f6de67e2ae54e2469f453d1203067e260d194cd39cbb9b2a1cc722be3ba61e6fb1e8'}});
  }
}
