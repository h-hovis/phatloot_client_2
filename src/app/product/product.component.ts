import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product: Product = new Product;
  products: Product[] = [];
  newProduct: string = '';
  newProductName: string = '';
  newProductCategory: string = '';
  // newProductPrice: number = 0;
  newProductDescription: string = '';
  // newProductImageUrl: string = '';

  constructor(private productService: ProductService, private router: Router) {}

  addProduct() {
    if (!this.newProduct.trim()) {
      // prevent adding empty product
      return;
    }

    const product = {
      name: this.newProductName,
      category: this.newProductCategory,
      // price: this.newProductPrice,
      description: this.newProductDescription,
      // imageUrl: this.newProductImageUrl
    };

    this.productService.createProduct(product).subscribe(newProduct => {
      this.products.push(newProduct);
      this.newProductName = '';
      this.newProductCategory = '';
      // this.newProductPrice = 0;
      this.newProductDescription = '';
      // this.newProductImageUrl = '';
      // reset input field after adding product
    });

  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe({
      next: () => this.products = this.products.filter(product => product.id !== id),
      error: (err) => console.error(err)
    });
  }

}
