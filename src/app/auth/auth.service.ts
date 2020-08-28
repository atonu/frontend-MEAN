import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {shareReplay, tap} from "rxjs/operators";
import {WebServiceService} from "./web-service.service";
import {Router} from "@angular/router";
import {BaseUrl} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = BaseUrl.nodeApi + '/auth';

  constructor(private http: HttpClient,
              private webService: WebServiceService,
              private router: Router) {
  }

  login(email: string, password: string) {
    return this.webService.login(email, password)
      .pipe(shareReplay(),
        tap((res: HttpResponse<any>) => {
          AuthService.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
        })
      );
  }

  getAccessToken() {
    return localStorage.getItem('x-access-token');
  }

  getRefreshToken() {
    return localStorage.getItem('x-refresh-token');
  }

  setAccessToken(accessToken) {
    localStorage.setItem('x-access-token', accessToken);
  }

  setRefreshToken(refreshToken) {
    localStorage.setItem('x-refresh-token', refreshToken);
  }

  private static setSession(userId: string, accessToken: string, refreshToken: string) {
    localStorage.setItem('user-id', userId);
    localStorage.setItem('x-access-token', accessToken);
    localStorage.setItem('x-refresh-token', refreshToken);
  }

  removeSession() {
    localStorage.removeItem('user-id');
    localStorage.removeItem('x-access-token');
    localStorage.removeItem('x-refresh-token');
    console.log('removed session')
  }
  getUserId() {
    return localStorage.getItem('user-id');
  }

  logout() {
    this.removeSession();
    this.router.navigateByUrl('./login');
  }

  getNewAccessToken() {
    return this.http.get(`${this.baseUrl}/getAccessToken`, {
      headers: {
        'x-refresh-token': this.getRefreshToken(),
        '_id': this.getUserId()
      },
      observe: 'response'
    }).pipe(
      tap((res: HttpResponse<any>) => {
        this.setAccessToken(res.headers.get('x-access-token'));
      })
    )
  }
}
