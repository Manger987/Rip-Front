import { Component, OnInit } from '@angular/core';
import { productInterface } from 'src/app/models/product';
import { DataProductService } from 'src/app/services/data-product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    public productService: DataProductService,
  ) { }

  public products: any = {};

  async ngOnInit() {
    this.getListProducts();
  }

  async getListProducts() {
    this.products = await this.productService.getAllProducts();
    console.log('products:', this.products);
  }

}
