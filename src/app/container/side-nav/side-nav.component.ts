import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShoppingCartHandlerService } from '../services/shopping-cart-handler.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Output() hideIddleMessage = new EventEmitter

  showShoppingCartNavOption = true

  constructor( readonly shoppingCartInformation:ShoppingCartHandlerService ) { }

  navigationClickHandle(){
    this.hideIddleMessage.emit('')
  }

  toggleShoppingCartNavOptionView(){
    if(this.shoppingCartInformation.selectedProductsList.length>0){
      this.showShoppingCartNavOption = true
    }
  }

  ngOnInit(): void {
    this.toggleShoppingCartNavOptionView()
  }

}
