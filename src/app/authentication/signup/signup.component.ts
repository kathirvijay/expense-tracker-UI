import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { ApiService } from '../../_service&interceptors/api.service';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MaterialModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signup: FormGroup

  constructor( private fb : FormBuilder,
    private apiSerice: ApiService
  ) {
    this.createForm()
  }

  createForm() {
    this.signup = this.fb.group({
      userName: ['',Validators.compose([Validators.required])],
      email: ['',Validators.compose([Validators.required])],
      password: ['',Validators.compose([Validators.required])],
      cpassword: ['',Validators.compose([Validators.required])],
    })
  }

  async signUp() {
    try {
      let param = {
        username: this.signup.get('userName').value,
        email: this.signup.get('email').value,
        password: this.signup.get('password').value,
        cpassword: this.signup.get('cpassword').value,
      }
      console.log("param", param);
      
      let result = await this.apiSerice.Authentication(param, 'SIGN_UP');
      console.log("result", result);
      
      if(result.sucess){
        console.log("result", result);
        
      } else {

      }
    } catch(e) {
      console.log("error in sign up ", e);
      
    }  }
}
