import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../service/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProduct : any[] = [] ;
  total  :any = 0 ;
  addSuccefelly : boolean = false ;

  constructor(private service : CartsService) {}
  ngOnInit(): void {
    this.getCartProducts()
  }
  getCartProducts(){
    if ("cart" in localStorage) {
      this.cartProduct = JSON.parse(localStorage.getItem("cart")!)
    }
    this.getTotal()
  }
  getTotal() {
    this.total = 0 ;
      for(let x in this.cartProduct) {
        this.total += this.cartProduct[x].item.price * this.cartProduct[x].quantity
      }

  }
  add(index : number) {

    this.cartProduct[index].quantity++ ;
    this.getTotal() ;
    localStorage.setItem('cart' , JSON.stringify(this.cartProduct));
  }
  min (index : number) {
    this.cartProduct[index].quantity-- ;
    this.getTotal() ;
    localStorage.setItem('cart' , JSON.stringify(this.cartProduct));

  }
  detectChanges() {
    localStorage.setItem('cart' , JSON.stringify(this.cartProduct));

  }
  delete(index :number) {
    this.cartProduct.splice(index , 1) ;
    localStorage.setItem('cart' , JSON.stringify(this.cartProduct));
    this.getTotal() ;

  }
  claerData(){
    this.cartProduct = [] ;
    localStorage.setItem('cart' , JSON.stringify(this.cartProduct));
    this.getTotal() ;

  }
  addCart() {
    let products = this.cartProduct.map(item => {
     return {productId:item.item.id , quantity : item.quantity}
    })
    let model = {
      userId : 5 ,
      date : new Date ,
      products :products ,
    }
    this.service.createNewCart(model).subscribe(res => {
      this.addSuccefelly = true
    })

  }
}
