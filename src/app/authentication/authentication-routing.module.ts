import { NgModule } from '@angular/core';
import {  Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: SignupComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }

];

