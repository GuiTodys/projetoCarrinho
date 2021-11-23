import { Product } from './../../../models/productInformation';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() productName:string = ''
  @Input() imgPath:string = ''
  @Input() productDescription:string = ''
  @Input() productCost:number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
