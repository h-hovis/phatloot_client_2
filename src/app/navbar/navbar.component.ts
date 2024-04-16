import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isLoading = false;
  isNavbarActive = false;
  isAuthenticated = false;

  constructor(public authService: AuthenticationService, private router: Router) {}

  toggleNav(){
    this.isNavbarActive=!this.isNavbarActive;
  }

  ngOnInit(): void {
  }

  login(username: string, password: string) {
    this.authService.login(username, password);
  }

  signUp(user: any) {
    this.authService.signUp(user);
  }

  logout() {
    this.authService.logout();
  }


}
