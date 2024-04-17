import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { Form, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthenticationService, private router: Router) {}

  login() {
    const password = this.loginForm.value.password;
    const username = this.loginForm.value.username;
      console.log('Logging in with username:', username, 'and password:', password)
    this.authService.login(username, password).subscribe({
      next: (res: any) => {
        console.log('Logged in with token:', res.token);
        this.router.navigate(['/product-list']);
      },
      error: (error: any) => {
        console.error('Login error', error);
      },
    });
    // this.authService.login(this.username, this.password).subscribe({
    //   next: (res: any) => {
    //     console.log('Logged in with token:', res.token);
    //     this.authService.setToken(res.token);
    //     this.router.navigate(['/home']);
    //   },
    //   error: (error: any) => {
    //     console.error('Login error', error);
    //   },
    // });
  }

  // onCancel() {
  //   this.openModal = false;
  //   this.router.navigate(['/home']);
  // }

}
