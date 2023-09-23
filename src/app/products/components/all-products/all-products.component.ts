import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Categorie } from '../../model/categories.interface';
import { Product } from '../../model/product.interface';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {


  products :Product [] = [] ;
  categories: Categorie[] = []; // Use the Category interface here
  cartProdductsToSaveIntoLocalStorage : any[] = [] ;
  loading : boolean = false ;
  constructor(private productService : ProductService ) {}
  ngOnInit(): void {
    this.getAllProducts() ;
    this.getAllCategories()

   }

  getAllProducts() {

    this.productService.getAllProduct().subscribe((data : any) => {
      this.products = data ;
      this.loading = false ;

    } , error => {
      alert(error.message)

    })


  }

  getAllCategories () {
    this.loading = true  ;
    this.productService.getAllCategories().subscribe( (data : any) => {
      this.categories = data ;
      this.loading = false ;
      console.log(this.categories);

    })
  }

  filterCategorie(event : any) {
    let value = event.target.value ;
     (value =="all") ? this.getAllProducts() : this.getProductsCategorie(value) ;
  }
  getProductsCategorie(keyword : string) {
    this.loading = true ;
    this.productService.getProductsByCategories(keyword).subscribe((res :any) => {
      this.products = res ;
      this.loading = false ;
    } )
  }
  addToCard(event :any) {

    if("cart" in localStorage){
      this.cartProdductsToSaveIntoLocalStorage = JSON.parse(localStorage.getItem("cart")!)

      let exist = this.cartProdductsToSaveIntoLocalStorage.find(item =>item.item.id == event.item.id) ;
      if(exist) {
        alert('Product Already in your card')
      } else {
        this.cartProdductsToSaveIntoLocalStorage.push(event) ;
        localStorage.setItem("cart" , JSON.stringify(this.cartProdductsToSaveIntoLocalStorage)) ;
      }
    } else {
      this.cartProdductsToSaveIntoLocalStorage.push(event) ;
      localStorage.setItem("cart" , JSON.stringify(this.cartProdductsToSaveIntoLocalStorage))
    }


  }
}
