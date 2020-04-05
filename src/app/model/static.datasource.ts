import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class StaticDatasource {
  private data: Product[];

  constructor() {
    this.data = new Array<Product>(
      new Product(1, 'kayak', 'watersport', 275)
    );
  }

  getData(): Product[] {
    return this.data;
  }
}
