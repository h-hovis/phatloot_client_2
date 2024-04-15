import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product: Product = new Product;
  products: Product[] = [];
  newProduct: string = '';


  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  addProduct() {
    if (!this.newProduct.trim()) {
      // prevent adding empty product
      return;
    }

    const product = {
      name: this.newProduct,
      category: 'Other',
      price: 9.99,
      description: 'New product',
      imageUrl: 'https://via.placeholder.com/150'
    };

    this.productService.createProduct(product).subscribe(newProduct => {
      this.products.push(newProduct);
      this.newProduct = ''; // reset input field after adding product
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
