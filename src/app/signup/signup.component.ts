import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signUpForm: FormGroup = new FormGroup ({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    password_confirmation: new FormControl('')
  });

  constructor(private authService: AuthenticationService, private router: Router) {}

  onSubmit() {
    const formValue = this.signUpForm.value;

    this.authService.signUp(formValue).subscribe({
      next: (res: any) => {
        console.log('Sign up successful', res);
        this.router.navigate(['/login']);
      },
      error: (error: any) => {
        console.error('sign up failed', error);
      },
    });
    // if (this.user.password === this.user.password_confirmation) {
    //   this.authService.signUp(this.user).subscribe({
    //     next: (res: any) => {
    //       console.log('Sign up successful', res);
    //       this.router.navigate(['/login']);
    //     },
    //     error: (error: any) => {
    //       console.error('sign up failed', error);
    //     },
    //   });
    // } else {
    //   console.error('Passwords do not match');
    // }
  }


}
