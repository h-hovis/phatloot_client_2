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
  openModal = false;
  isLoading = false;
  isNavbarActive = false;
  isAuthenticated = false;

  constructor(public authService: AuthenticationService) {}

  toggleNav(){
    this.isNavbarActive=!this.isNavbarActive;
  }

  ngOnInit(): void {
  }

  login() {
    this.openModal = true;
  }

  logout() {
    this.authService.logout();
  }


}
