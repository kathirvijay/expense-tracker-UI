import { Routes } from '@angular/router';
import { AuthGuard } from './_service&interceptors/auth.guard';

export const routes: Routes = [
{
    path: 'add-cost',
    loadComponent: ()=> import("../app/add-cost/add-cost.component").then(m=> m.AddCostComponent),
    canActivate: [AuthGuard]
},
{
    path: 'auth',
    loadComponent: ()=>import('./authentication/authentication.component').then(m=>m.AuthenticationComponent),
    children:[
            {
                path: 'login',
                loadComponent: ()=>import('./authentication/login/login.component').then(m=>m.LoginComponent),
            },
            {
                path: 'signup',
               loadComponent: ()=>import('./authentication/signup/signup.component').then(m=>m.SignupComponent),
            },
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            }
        ]
},
{
    path: '**',
    redirectTo: 'auth/login'
}
];
