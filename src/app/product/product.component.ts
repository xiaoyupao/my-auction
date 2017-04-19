import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';

import { ProductService, Product } from '../shared/product.service';
import { FilterPipe } from '../pipe/filter.pipe';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Product[];
  private imgUrl: string;
  private keyWord: string;

  titleFilter: FormControl = new FormControl();

  constructor(private productservice: ProductService) {
    this.titleFilter.valueChanges
    .debounceTime(500)
    .subscribe(
      value => this.keyWord = value
    )  
  }

  ngOnInit() {
    this.imgUrl = "http://placehold.it/320x150";
    this.products = this.productservice.getProducts();
  }

}


