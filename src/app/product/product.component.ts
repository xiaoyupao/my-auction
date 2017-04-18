import { Component, OnInit } from '@angular/core';

import { ProductService, Product } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Product[];
  private imgUrl: string;

  constructor(private productservice: ProductService) { }

  ngOnInit() {
    this.imgUrl = "http://placehold.it/320x150";
    this.products = this.productservice.getProducts();
  }

}


