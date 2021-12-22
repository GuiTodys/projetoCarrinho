import { Product } from './../models/productInformation';
import { Injectable, OnInit } from '@angular/core';
import { ProductInformationService } from './product-information.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartHandlerService {

  selectedProduct: Product | undefined = undefined
  selectedProductsList: Product[] = []
  totalCartCost: number = 0

  constructor(readonly productInformation: ProductInformationService) { }


  addProductToSHoppingCart(productId: string) {
    this.selectedProduct = this.productInformation.productList.find(product => product.id === productId) ?? this.productInformation.product1

    //Vefiry if the produtct is already in the list
    for (const product of this.selectedProductsList) {
      if (product.id === productId) {
        window.alert('This product has already been adeed!')
        return
      }
    }

    this.selectedProduct.quantity = 1
    this.selectedProductsList = [...this.selectedProductsList, this.selectedProduct]
    localStorage.setItem('SelectedProductsList', JSON.stringify(this.selectedProductsList))
  }

  removeItemFromCart(productId: string) {
    this.selectedProductsList = this.selectedProductsList.filter((product) => productId !== product.id)
    localStorage.setItem('SelectedProductsList', JSON.stringify(this.selectedProductsList))
    this.sumProductsCost()
  }

  calculateProductCostBasedOnQuantity(product: Product){
    product.value*(product.quantity||0)
  }

  sumProductsCost(){
    this.totalCartCost = this.selectedProductsList.reduce<number>(((acc,current) => {
      console.log(`Valor acumulado: ${acc}`)
      console.log(`Valor current: ${current.value}`)
      console.log(`Valor total: ${this.totalCartCost}`)
      return acc + current.value*(current.quantity||0)}),0)
    console.log('calculou total')
  }

  setProductQuantity(product: Product, quantity: string) {

    for (const index in this.selectedProductsList) {
      if (this.selectedProductsList[index].id===product.id) {
        this.selectedProductsList[index].quantity = Number(quantity)
      }
    }
    localStorage.setItem('SelectedProductsList', JSON.stringify(this.selectedProductsList))
    this.sumProductsCost()
    }

    // Button handlers
    increaseProductQuantityHandler(index:number):void{
      if(this.selectedProductsList[index].quantity){
        this.selectedProductsList[index].quantity = this.increaseQuantity(this.selectedProductsList[index].quantity||1)
      }
    }

    decreaseProductQuantityHandler(index:number):void{
      if(this.selectedProductsList[index].quantity){
        this.selectedProductsList[index].quantity = this.decreaseQuantity(this.selectedProductsList[index].quantity||1)
      }
    }

    increaseQuantity(productQuantity:number):number{
      return productQuantity+1
    }

    decreaseQuantity(productQuantity:number):number{
      if(productQuantity>2){
        return productQuantity-1
      }
      return 1
    }

  }




