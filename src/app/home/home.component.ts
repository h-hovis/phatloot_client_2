import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from "../product-list/product-list.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [CommonModule, ProductListComponent]
})
export class HomeComponent {

}
