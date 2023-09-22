import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Categorie } from '../model/categories.interface';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {


  products :any [] = [] ;
  categories: Categorie[] = []; // Use the Category interface here
  constructor(private productService : ProductService ) {}
  ngOnInit(): void {
    this.getAllProducts() ;
    this.getAllCategories()

   }

  getAllProducts() {
    this.productService.getAllProduct().subscribe((data : any) => {
      this.products = data ;


    } , error => {
      alert(error.message)

    })


  }

  getAllCategories () {
    this.productService.getAllCategories().subscribe( (data : any) => {
      this.categories = data ;
      console.log(this.categories);

    })
  }

  filterCategorie(event : any) {
    let value = event.target.value ;
    if (value =="all") {
      this.getAllProducts()
    }
    else {
      this.getProductsCategorie(value)
    }

  }
  getProductsCategorie(keyword : string) {
    this.productService.getProductsByCategories(keyword).subscribe((res :any) => {
      this.products = res ;
    } )
  }
}
