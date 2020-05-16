import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() productList: Product[];
  @Output() productSelected: EventEmitter<Product>;

  constructor() { }

  ngOnInit(): void {
  }

}
