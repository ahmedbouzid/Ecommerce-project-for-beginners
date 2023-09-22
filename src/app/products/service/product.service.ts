import { HttpClient,  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }
  API = 'https://api.escuelajs.co/api/v1/'
  getAllProduct() {
   return this.http.get(this.API+'products')
  }
}
