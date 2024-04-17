import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{

  products: Product[] = [];
  product = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    image: '',
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // this.productService.getMyProducts().subscribe(products => this.products = products);
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
