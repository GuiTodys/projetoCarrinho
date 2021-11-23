import { Component, OnInit } from '@angular/core';
import { ProductInformationService } from '../../services/product-information.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productListTest:string[] = ['assets/memoria.jpg', 'assets/ssd.jpg', 'assets/mouse.jpg', 'assets/memoria.jpg']

  constructor(readonly productInformation:ProductInformationService) { }

  ngOnInit(): void {
  }

}
