import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [LoginComponent, SignupComponent, RouterModule, RouterOutlet],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent {

}
