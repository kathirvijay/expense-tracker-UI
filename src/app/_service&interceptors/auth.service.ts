import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private hasToken(): boolean {
    return !! localStorage.getItem('token')
  }

  private isAuthenticatedSubject= new BehaviorSubject<boolean>(this.hasToken())
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable()

  constructor() { 

  }

  isAuth(res, method) {
    if( method == 'LOGIN') {
      this.login(res)
    } else {
      this.logout(res)
    }
  }

  private login(response) {
    localStorage.setItem('token', response.token);
    this.isAuthenticatedSubject.next(true);
  }

  private logout(response) {
    localStorage.setItem('token', response.token);
    this.isAuthenticatedSubject.next(true);
  }

  getToken() {
    return localStorage.getItem('token')
  }
}
