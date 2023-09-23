import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor( private http : HttpClient) { }
  API = 'https://fakestoreapi.com/'

  createNewCart(model :any) {
    return this.http.post(this.API +'carts' , model)
  }
}
