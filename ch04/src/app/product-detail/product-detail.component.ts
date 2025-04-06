import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Product } from '../product';
import { NumericDirective } from './../numeric.directive';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, NumericDirective],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  product = input<Product>();
  added = output();

  addToCart() {
    this.added.emit();
  }
}
