import { Product } from './../../models/productInformation';
import { Component, OnInit } from '@angular/core';
import { ProductInformationService } from '../../services/product-information.service';
import { ShoppingCartHandlerService } from '../../services/shopping-cart-handler.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productListTest:string[] = ['assets/memoria.jpg', 'assets/ssd.jpg', 'assets/mouse.jpg', 'assets/memoria.jpg']

  selectedProduct:Product|undefined

  constructor(readonly productInformation:ProductInformationService, readonly shoppingCartHandler:ShoppingCartHandlerService) { }



  ngOnInit(): void {
  }

}
