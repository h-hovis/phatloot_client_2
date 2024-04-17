import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    password_confirmation: '',
  };

  constructor(private authService: AuthenticationService, private router: Router) {}

  onSubmit() {
    if (this.user.password === this.user.password_confirmation) {
      this.authService.signUp(this.user).subscribe({
        next: (res: any) => {
          console.log('Sign up successful', res);
          this.router.navigate(['/login']);
        },
        error: (error: any) => {
          console.error('sign up failed', error);
        },
      });
    } else {
      console.error('Passwords do not match');
    }
  }


}
