import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShoppingCartHandlerService } from 'src/app/container/services/shopping-cart-handler.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  setProductsQuantity: FormGroup;
  showEmptyCartMessage: boolean = true

  constructor(readonly shoppingCartData:ShoppingCartHandlerService){
    this.setProductsQuantity = new FormGroup({
      'productQuantity': new FormControl(1,
      [Validators.required,
      Validators.max(99)])
    })
   }

   lockInputTypingFromUser(typingEvent: Event){
    typingEvent.preventDefault()
   }

  ngOnInit(): void {
    this.shoppingCartData.selectedProductsList = JSON.parse(localStorage.getItem('SelectedProductsList')??'')
    this.shoppingCartData.selectedProductsList.forEach(product=>product.quantity=1)
    localStorage.setItem('SelectedProductsList', JSON.stringify(this.shoppingCartData.selectedProductsList))
    this.shoppingCartData.sumProductsCost()
    this.shoppingCartData.emptyCartMessageHandler()
  }



}
