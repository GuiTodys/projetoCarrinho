import { Product } from './../../../models/productInformation';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() productId:string=''
  @Input() productName:string = ''
  @Input() imgPath:string = ''
  @Input() productDescription:string = ''
  @Input() productCost:number = 0

  @Output() addToCart= new EventEmitter()

  showDescription:boolean = false

  constructor() { }

  addToCartHandler(){
    this.addToCart.emit(this.productId)
  }

  showDescriptionHandler(){
    this.showDescription = !this.showDescription
  }

  ngOnInit(): void {
  }

}
