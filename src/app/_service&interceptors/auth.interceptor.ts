import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // This line ensures the service is available globally
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService : AuthService) {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.authService.getToken()
    if(authToken) {
      const authRequest = req.clone({
        setHeaders: { Authorication : `Bearer ${authToken}`}
      })
      return next.handle(authRequest)
    }
    return next.handle(req)
  }
  
};
