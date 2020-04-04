import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
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
    await this.getListProducts().then(response => {
      this.products = Object.values(response.data);
      console.log('data:',this.products);
    });;
  }

  async getListProducts() {
    return await this.productService.getAllProducts();
    
  }

}
