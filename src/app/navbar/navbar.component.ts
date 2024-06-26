import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';

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

  constructor(public authService: AuthenticationService, public productService: ProductService, public userService: UserService, private router: Router) {}

  toggleNav(){
    this.isNavbarActive=!this.isNavbarActive;
  }

  ngOnInit(): void {
  }

  home() {
    this.router.navigate(['/']);
  }

  addProduct() {
    this.router.navigate(['/product']);
  }

  login() {
    this.router.navigate(['/login']);
  }

  signUp() {
    this.router.navigate(['signup']);
  }

  logout() {
    this.authService.logout();
  }


}
