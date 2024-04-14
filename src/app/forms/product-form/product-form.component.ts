import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  newProductForm: FormGroup;
  newProductFormHasBeenSubmitted = false;
  NewProduct: any;
  // genID = number;

  constructor(
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder
  ) {
    this.newProductForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  ngOnDestroy() {
    this.newProductForm.reset();
  }

  onSubmit() {
    const {
      name,
      category,
      price,
      description,
      image
    } = this.newProductForm.value;



    // onCancel() {
    //   this.router.navigate(['/home'])
    // }
  }

}
