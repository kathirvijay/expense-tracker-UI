import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { AuthService } from '../../_service&interceptors/auth.service'
import { ApiService } from '../../_service&interceptors/api.service';
import { Router } from '@angular/router';
import { interval, Subject, takeUntil } from 'rxjs';
import { AddCostComponent } from '../../add-cost/add-cost.component';

@Component({
    selector: 'app-login',
    imports: [ReactiveFormsModule, CommonModule, MaterialModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
  login: FormGroup
    destroy$ = new Subject<void>()
    count$: any
    constructor(private fb : FormBuilder,
      private apiService: ApiService,
      private router: Router,
      private authService: AuthService
    ) {
      this.createForm()
      this.count$= this.authService.count$
    }

    ngOnInit() {
        interval(1000).pipe(
        takeUntil(this.destroy$)
      ).subscribe(val => console.log('valll', val))
    }
  
  createForm() {
      this.login = this.fb.group({
        email: ['',Validators.compose([Validators.required])],
        password: ['',Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(16)])],
      })
      console.log('this.login', this.login.valid);
      
    }

    async submitLogin() {
      try{
        let param = {
          email: this.login.get('email').value,
          password: this.login.get('password').value
        }
        let result = await this.apiService.Authentication(param, 'LOGIN');
        console.log('result', result);
        if(result?.success) {
            this.router.navigate(['/add-cost']);
        } else {
          console.log("login failed !!!");
          
        }
      } catch {

      }
    }
    
    reset() {
      this.authService.reset()
    }

    ngOnDestroy(){
      this.destroy$.next()
      this.destroy$.complete()
    }
}
