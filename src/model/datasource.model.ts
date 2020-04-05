import { Product } from './product.model';

export class SimpleDataSource {
  private data: Product[];

  constructor() {
    this.data = new Array<Product>(
      new Product(1, 'kayak', 'watersports', 275)
    );
  }

  getData(): Product[] {
    return this.data;
  }
}
