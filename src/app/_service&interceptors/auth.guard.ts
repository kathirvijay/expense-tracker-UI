import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { map, take } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root' // This line ensures the service is available globally
})
export class AuthGuard implements CanActivate  {
  constructor(private authService: AuthService,
    private router: Router
  ) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return this.authService.isAuthenticated$.pipe(
      take(1),
      map(isauthenticated=>{
        if(isauthenticated) {
          return true
        } else {
          this.router.navigate(['/login'])
          return false
        }
      })
    )
  }


};
