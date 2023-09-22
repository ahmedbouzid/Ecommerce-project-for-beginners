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
}
