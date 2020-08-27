import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {AuthService} from "./auth.service";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class WebRequestInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any>{
    this.addAuthHeader(req);
    return next.handle(req).pipe(
      catchError(err => {
        console.log(err);
        return throwError(err);
      })
    )
  }

  addAuthHeader(request: HttpRequest<any>) {
    const  token = this.authService.getAccessToken();
    if (token) {
      return request.clone({
        setHeaders: {
          'x-access-token': token
        }
      })
    }
    return  request;
  }
}
