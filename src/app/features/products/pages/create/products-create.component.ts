import { ProductService } from './../../../../shared/services/product/product.service';
import { Product } from './../../../../shared/models/product.model';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, tap } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.scss'],
})
export class ProductsCreateComponent {
  productForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setForm();
  }

  private setForm() {
    this.productForm = this.fb.group({
      name: [null, [Validators.required]],
      marca: [null, [Validators.required]],
      productByPrices: this.fb.array([this.newproductByPrices()]),
    });
  }

  submitForm(): void {
    if (this.productForm.valid) {
      const product: Product = this.formatProductBody(this.productForm.value);
      this.productService
        .post(product)
        .pipe(
          tap(() => this.router.navigate(['/products/list'])),
          catchError(async (err) => console.log(err))
        )
        .subscribe();
    } else {
      Object.values(this.productForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  private formatProductBody(product: Product) {
    const productId = uuidv4();
    return {
      ...product,
      id: productId,
      productByPrices: product.productByPrices.map((product: any) => ({
        ...product,
        cost: Number(product.cost),
        id: uuidv4(),
        productId,
      })),
    };
  }

  private newproductByPrices(): FormGroup {
    return this.fb.group({
      color: [null, [Validators.required]],
      cost: [null, [Validators.required]],
    });
  }

  public get productByPrices(): FormArray {
    return this.productForm.get('productByPrices') as FormArray;
  }

  public removeProductPrice(index: number) {
    this.productByPrices.removeAt(index);
  }

  public addProductPrice() {
    this.productByPrices.push(this.newproductByPrices());
  }
}
