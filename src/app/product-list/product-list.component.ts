import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  productForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('')
  });

  product: Product = new Product;
  products: Product[] = [];
  newProduct: string = '';
  newProductName: string = '';
  newProductCategory: string = '';
  newProductPrice: number = 0;
  newProductDescription: string = '';
  newProductImageUrl: string = '';


  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getMyProducts().subscribe(products => this.products = products);
  }

  addProduct() {
    if (!this.newProduct.trim()) {
      // prevent adding empty product
      return;
    }

    const product = {
      name: this.newProductName,
      category: this.newProductCategory,
      price: this.newProductPrice,
      description: this.newProductDescription,
      imageUrl: this.newProductImageUrl
    };

    this.productService.createProduct(product).subscribe(newProduct => {
      this.products.push(newProduct);
      this.newProductName = '';
      this.newProductCategory = '';
      this.newProductPrice = 0;
      this.newProductDescription = '';
      this.newProductImageUrl = '';
      // reset input field after adding product
    });
  }



  updateProduct(product: Product) {
    this.productService.updateProduct(product).subscribe(updatedProduct => {
      const index = this.products.findIndex(p => p.id === updatedProduct.id);
      this.products[index] = updatedProduct;
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe({
      next: () => this.products = this.products.filter(product => product.id !== id),
      error: (err) => console.error(err)
    });
  }

}
