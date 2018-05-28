import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'products';

  selectedProduct: Product;

  constructor() { }

  ngOnInit() {

  }

  onProductClick(product): void {
    this.selectedProduct = product;
  }
}
