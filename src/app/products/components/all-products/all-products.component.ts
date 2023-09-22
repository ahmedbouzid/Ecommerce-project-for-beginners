import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {


  products :any [] = []
  constructor(private productService : ProductService ) {}


  getAllProducts() {
    this.productService.getAllProduct().subscribe((data : any) => {
      this.products = data ;
      console.log(data);

    }) 


  }
  ngOnInit(): void {
   this.getAllProducts() ;

  }

}
