import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  newProductForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('')
  });;
  newProductFormHasBeenSubmitted = false;
  NewProduct: any;
  // genID = number;

  constructor() {}

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
