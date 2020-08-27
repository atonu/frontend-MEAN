import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {shareReplay, tap} from "rxjs/operators";
import {WebServiceService} from "./web-service.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private wbeService: WebServiceService) {
  }

  login(email: string, password: string) {
    return this.wbeService.login(email, password)
      .pipe(shareReplay(),
        tap((res: HttpResponse<any>) => {
          AuthService.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
        })
      );
  }

  getAccessToken(){
    return localStorage.getItem('x-access-token');
  }
  getRefreshToken(){
    return localStorage.getItem('x-refresh-token');
  }
  setAccessToken(accessToken){
    localStorage.setItem('x-access-token',accessToken);
  }
  setRefreshToken(refreshToken){
    localStorage.setItem('x-refresh-token',refreshToken);
  }

  private static setSession(userId: string, accessToken: string, refreshToken: string) {
    localStorage.setItem('user-id', userId);
    localStorage.setItem('access-token', accessToken);
    localStorage.setItem('refresh-Token', refreshToken);
  }

  removeSession() {
    localStorage.removeItem('user-id');
    localStorage.removeItem('access-token');
    localStorage.removeItem('refreshToken');
  }
}
