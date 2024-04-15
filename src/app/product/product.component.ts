import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  // productForm = new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   category: new FormControl('', [Validators.required]),
  //   price: new FormControl('', [Validators.required]),
  //   description: new FormControl('', [Validators.required]),
  //   imageUrl: new FormControl('')
  // });

  // constructor(private productService: ProductService, private router: Router) {}

  // onSubmit() {
  //   this.productService.createProduct(this.productForm.value).subscribe({
  //     next: (product: Product) => {
  //       console.log('Product created', product);
  //       this.router.navigate(['/']);
  //     },
  //     error: (error: any) => {
  //       console.error('Error creating product', error);
  //     },
  //   });
  // }

  // deleteProduct(id: number) {
  //   this.productService.deleteProduct(id).subscribe({
  //     next: () => this.products = this.products.filter(product => product.id !== id),
  //     error: (err) => console.error(err)
  //   });
  // }

}
