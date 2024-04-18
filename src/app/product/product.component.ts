import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  productForm: FormGroup = new FormGroup ({
  name: new FormControl(''),
  category: new FormControl(''),
  // price: new FormControl(0),
  description: new FormControl(''),
  // imageUrl: new FormControl('')
  });
  constructor(private productService: ProductService, private router: Router) {}

 onSubmit() {
    const formValue = this.productForm.value;

    this.productService.createProduct(formValue).subscribe({
      next: (res: any) => {
        console.log('Product created', res);
        this.router.navigate(['/product-list']);
      },
      error: (error: any) => {
        console.error('Product creation failed', error);
      },
    });

  }

  // deleteProduct(id: number) {
  //   this.productService.deleteProduct(id).subscribe({
  //     next: () => this.product = this.product.filter(product => product.id !== id),
  //     error: (err) => console.error(err)
  //   });
  // }

}
