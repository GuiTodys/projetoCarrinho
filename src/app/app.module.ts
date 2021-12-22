import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './container/header/header.component';
import { FooterComponent } from './container/footer/footer.component';
import { MainContentComponent } from './container/main-content/main-content.component';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatGridListModule} from "@angular/material/grid-list"

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './container/side-nav/side-nav.component';
import { ProductListComponent } from './container/main-content/product-list/product-list.component';
import { ShoppingCartComponent } from './container/main-content/shopping-cart/shopping-cart.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './container/main-content/product-list/product/product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartSummaryComponent } from './container/main-content/shopping-cart/cart-summary/cart-summary.component';
import { DeliveryInformationsComponent } from './container/main-content/shopping-cart/delivery-informations/delivery-informations.component';

const routes: Routes = [
  {
    path:'product-list',
   component: ProductListComponent
  },
   {
    path:'shopping-cart',
    component: CartSummaryComponent
   },
   {
     path: 'shopping-cart/delivery-informations',
     component: DeliveryInformationsComponent
   }
  ]


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    SideNavComponent,
    ProductListComponent,
    ShoppingCartComponent,
    ProductComponent,
    CartSummaryComponent,
    DeliveryInformationsComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
