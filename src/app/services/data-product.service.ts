import { Injectable } from '@angular/core';
import { productInterface } from 'src/app/models/product';
import { Observable } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DataProductService {

  constructor() { }
  public items: Observable<productInterface[]>;

  async getAllProducts(){
    await axios.get('http://localhost:4600/products/').then((response) => {
      console.log('retorna', response);
      return response;
    });
  }
}
