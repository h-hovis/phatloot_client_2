import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (res: any) => {
        console.log('Logged in with token:', res.token);
        this.authService.setToken(res.token);
        this.router.navigate(['/home']);
      },
      error: (error: any) => {
        console.error('Login error', error);
      },
    });
  }

  // onCancel() {
  //   this.openModal = false;
  //   this.router.navigate(['/home']);
  // }

}
