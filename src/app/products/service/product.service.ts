import { HttpClient,  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }
  API = 'https://fakestoreapi.com/'
  getAllProduct() {
   return this.http.get(this.API+'products')
  }
  getAllCategories () {
    return this.http.get(this.API + 'products/categories')
  }

  getProductsByCategories( keyword : string){
    return this.http.get(this.API +'products/category/'+keyword)
  }
  getProductById(id : any) {
    return this.http.get(this.API+'products/'+id)
  }
}
