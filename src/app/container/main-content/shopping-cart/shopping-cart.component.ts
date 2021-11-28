import { Component, ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { ProductInformationService } from '../../services/product-information.service';
import { ShoppingCartHandlerService } from '../../services/shopping-cart-handler.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(readonly productInformations:ProductInformationService) { }

  ngOnInit(): void {
  }

}
