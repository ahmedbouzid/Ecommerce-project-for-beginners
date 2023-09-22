import { HttpClient,  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  getAllProduct() {
   return this.http.get('https://api.escuelajs.co/api/v1/products')
  }
}
