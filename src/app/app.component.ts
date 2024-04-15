import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { HomeComponent } from "./home/home.component";
import { ProductComponent } from "./product/product.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, NavbarComponent, ProductListComponent, HomeComponent, ProductComponent]
})
export class AppComponent {
  title = 'phatloot_client_2';
}
