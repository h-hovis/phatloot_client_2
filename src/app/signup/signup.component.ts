import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signUpForm: FormGroup = new FormGroup ({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    password_confirmation: new FormControl('', Validators.required)
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
  }


}
