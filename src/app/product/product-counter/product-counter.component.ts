import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-counter',
  templateUrl: './product-counter.component.html',
  styleUrls: ['./product-counter.component.scss']
})
export class ProductCounterComponent implements OnInit {

  value: number;

  constructor() {
    this.value = 1;
  }

  ngOnInit(): void {
  }

  increase() {
    this.value = this.value + 1;
    return false;
  }

  decrease() {
    this.value = this.value = 1;
    return false;
  }

}
