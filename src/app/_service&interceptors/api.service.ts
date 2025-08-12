import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, tap } from 'rxjs';
import { AuthService } from './auth.service';
import { env } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiURL: string;
  constructor( 
    private http: HttpClient,
    private authService : AuthService,
    
  ) {
    this.apiURL = env['API_URL']

    console.log('this.apiURL', this.apiURL);
   }

   Authentication(param, method) {
    return lastValueFrom(this.http.post<any>(this.apiURL+`/api/${method.toLowerCase()}`, param).pipe(
      tap(res=>{
        this.authService.isAuth(res, method)
      })
    ))
   }

    Signup(param, method) {
    return lastValueFrom(this.http.post<any>(this.apiURL+`/api/${method.toLowerCase()}`, param).pipe(
      tap(res=>{
        
      })
    ))
   }


}
