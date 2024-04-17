import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

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

  constructor(public authService: AuthenticationService, public productService: ProductService, private router: Router) {}

  toggleNav(){
    this.isNavbarActive=!this.isNavbarActive;
  }

  ngOnInit(): void {
  }

  addProduct() {
    this.router.navigate(['/product']);
  }

  login() {
    this.authService.login('username', 'password');
  }

  signUp() {
    this.authService.signUp('user');
  }

  logout() {
    this.authService.logout();
  }


}
