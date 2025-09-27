import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private counter$=new BehaviorSubject<number>(0)
  count$= this.counter$.asObservable()

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
    } else if(method == 'SIGN_UP') {
      this.logout()
    } else {
      console.log(`${method} - method is not valid`);
    }
  }

  private login(response) {
    localStorage.setItem('token', response.token);
    this.isAuthenticatedSubject.next(true);
  }

  logout() {
    localStorage.removeItem('token');
    this.isAuthenticatedSubject.next(false);
  }

  getToken() {
    return localStorage.getItem('token')
  }

    counter() {
      this.counter$.next(this.counter$.getValue()+1)
      this.count$.subscribe(val => console.log(val)) 
    }

    reset(){
      this.counter$.next(0)
    }
}
