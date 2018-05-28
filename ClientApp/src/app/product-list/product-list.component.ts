import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';
import { PRODUCTS } from '../mock-products';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;
  p: number = 1;

  @Output() toParent = new EventEmitter<Product>();

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
        .subscribe(products => this.products = products);
  }

  selectProduct(product: Product): void {
    this.selectedProduct = product;
    this.toParent.emit(this.selectedProduct);
  }
}
