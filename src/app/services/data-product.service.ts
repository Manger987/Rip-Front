import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import axios from 'axios';
import { ProductInterface } from './../models/product'; 


@Injectable({
  providedIn: 'root'
})
export class DataProductService {

  constructor() { }
  public products: Observable<ProductInterface[]>;

  public getAllProducts(): any {//Observable<ProductInterface[]> {
    return axios.get('http://localhost:4600/products/').then((data: any) => {
      return data;
    })
  }
}
