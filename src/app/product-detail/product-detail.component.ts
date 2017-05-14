import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService, Product, Comment } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  comments: Comment[];
  newRating: number = 5;
  newComment: string = "";

  isCommentHidden: boolean = true;
  constructor(
    private routeInfo: ActivatedRoute, 
    private productservice: ProductService
  ) { }

  ngOnInit() {
    let productId: number = this.routeInfo.snapshot.params['productId'];
    this.product = this.productservice.getProduct(productId);
    this.comments = this.productservice.getCommentsForProductId(productId);
  }

  addComment(){
    let comment = new Comment(0, this.product.id, new Date().toISOString(), 'someone', this.newRating, this.newComment);
    this.comments.unshift(comment);

    // 在点提交评论时，计算平均星级
    let sum = this.comments.reduce((sum,comment) => sum + comment.rating, 0);
    this.product.rating = sum / this.comments.length;
    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;

    
}

}
