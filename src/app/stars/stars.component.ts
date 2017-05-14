import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

  @Input()
  private rating: Number = 0;
  
  @Input()
  private readonly: boolean = true;

  // 只能输出属性是输入属性的 名称+change，符合这个规则时，
  // 这时，在该组件的selector指令里，可以直接用双向数据绑定的语法来写，
  // 例：product-detail组件里的 <app-star> 的rating写法，
  // 否则，在product-detail组件中，只能再写个事件绑定，类似于(ratingNewChange) ='func($evnt)'，捕获发射的事件，在父组件的 func() 定义里，把新属性传给rating属性；
  @Output()
  private ratingChange: EventEmitter<number> = new EventEmitter();

  private stars: boolean[];

  constructor() { }

  ngOnInit() {
    this.stars = [];
    for(let i=1; i<=5; i++){
      this.stars.push(i > this.rating);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for(let i=1; i<=5; i++){
      this.stars.push(i > this.rating);
    }
  }

  clickStar(index: number) {
    if(!this.readonly) {
      this.rating = index + 1; // 修改 输入属性 this.rating时，直接就会触发 ngOnChanges()
      this.ratingChange.emit(Number(this.rating));
    }
    
  }

}
