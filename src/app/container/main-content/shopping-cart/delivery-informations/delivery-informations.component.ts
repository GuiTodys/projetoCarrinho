import { deliveryInformation } from './../../../models/deliveryInformation';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-informations',
  templateUrl: './delivery-informations.component.html',
  styleUrls: ['./delivery-informations.component.css']
})
export class DeliveryInformationsComponent implements OnInit {

  deliveryInformationForm: FormGroup;

  deliveryInformation: deliveryInformation = new deliveryInformation('',0,'','',0,'')

  orderFinalized:boolean = false

  constructor() {
    this.deliveryInformationForm = new FormGroup({
      'rua': new FormControl('',[Validators.required]),
      'numero': new FormControl('',[Validators.required, Validators.min(1)]),
      'cidade': new FormControl('',[Validators.required]),
      'comprador': new FormControl('',[Validators.required]),
      'telefone': new FormControl('',[Validators.required]),
      'email': new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
  }

  get rua() {
    return this.deliveryInformationForm.get('rua')
  }

  get numero() {
    return this.deliveryInformationForm.get('numero')
  }

  get cidade() {
    return this.deliveryInformationForm.get('cidade')
  }

  get comprador() {
    return this.deliveryInformationForm.get('comprador')
  }

  get telefone() {
    return this.deliveryInformationForm.get('telefone')
  }

  get email() {
    return this.deliveryInformationForm.get('email')
  }

  deliveryInformationsSubmit(){
    this.deliveryInformation = new deliveryInformation(this.rua?.value, this.numero?.value, this.cidade?.value, this.comprador?.value, this.telefone?.value, this.email?.value)
    console.log(this.deliveryInformation)
    this.deliveryInformationForm.reset()
    localStorage.setItem('deliveryInformation', JSON.stringify(this.deliveryInformation))
    localStorage.setItem('finalizedOrder', localStorage.getItem('SelectedProductsList')||'')
    localStorage.removeItem('SelectedProductsList')
    this.orderFinalized = true
  }


}
