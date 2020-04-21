import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/models/product';
import { DataProductService } from 'src/app/services/data-product.service';
import { Observable } from 'rxjs';

// import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  // template: '<app-logout></app-logout>',
  styleUrls: ['./products.component.css'],
  // providers: [NgbCarouselConfig]
})
export class ProductsComponent implements OnInit {
  public products: any = [];
  
  constructor(
    public productService: DataProductService,
    // config: NgbCarouselConfig
  ) { 
  }

  async ngOnInit() {
    this.products = await this.getListProducts();
  }

  getListProducts(): Observable<ProductInterface[]> {
    return this.productService.getAllProducts().then(response => {
      return response.data;
    });
  }

}
