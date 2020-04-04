import { Injectable } from '@angular/core';
import { productInterface } from 'src/app/models/product';
import { Observable } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DataProductService {

  constructor() { }
  public products: Observable<productInterface[]>;

  async getAllProducts(){
    return await axios.get('http://localhost:4600/products/');
  }
}
