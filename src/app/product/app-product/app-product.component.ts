import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-app-product',
  templateUrl: './app-product.component.html',
  styleUrls: ['./app-product.component.scss']
})
export class AppProductComponent implements OnInit {

  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'nicehat',
        'a nice black hat',
        '',
        ['men', 'accessories', 'hats'],
        29.99
      ),
      new Product(
        'nicehat',
        'a nice black hat',
        '',
        ['men', 'accessories', 'hats'],
        29.99
      ),
    ];
  }

  ngOnInit(): void {
  }

  productWasSelected(product: Product): void {
    console.log(`prodcut clicked:${product}`);
  }

}
