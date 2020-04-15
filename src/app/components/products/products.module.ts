import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { BrowserModule } from '@angular/platform-browser';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    // BrowserModule, 
    // NgbModule
  ],
  exports: [
    ProductsComponent
  ],
  bootstrap: [ProductsComponent]
})
export class ProductsModule { }
