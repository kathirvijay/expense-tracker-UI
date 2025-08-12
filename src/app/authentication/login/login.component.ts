import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { AuthService } from '../../_service&interceptors/auth.service'
import { ApiService } from '../../_service&interceptors/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login: FormGroup
  
    constructor(private fb : FormBuilder,
      private apiService: ApiService
    ) {
      this.createForm()
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
        if(result?.success) {

        } else {
          console.log("login failed !!!");
          
        }
      } catch {

      }
    }
}
