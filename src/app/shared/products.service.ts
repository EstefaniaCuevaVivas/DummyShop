import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../interface/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  getProducts(){
    return this.http.get('https://dummyjson.com/products');
  }

  addProduct(newProduct: Product){
    return this.http.post('https://dummyjson.com/auth/products/add', newProduct)
  }

  updateProduct(id: Product){
    return this.http.post('https://dummyjson.com/auth/products/{id}',id)
  }

  deleteProduct(id: Product){
    return this.http.post('https://dummyjson.com/auth/products/{id}',id)
  }
}
