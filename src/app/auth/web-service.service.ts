import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseUrl} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {
  baseUrl = BaseUrl.nodeApi + '/auth';

  constructor(private http: HttpClient) {
  }

  login(email: String, password: String) {

    return this.http.post(this.baseUrl + "/login", {email, password}, {observe: 'response'});
  }

  register(name: String, email: String, phone: String, password: String) {
    return this.http.post(this.baseUrl + "/register", {name, email, phone, password}, {observe: 'response'});
  }
}
