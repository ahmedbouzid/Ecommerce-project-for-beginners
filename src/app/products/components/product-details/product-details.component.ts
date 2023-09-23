import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export default class ProductDetailsComponent implements OnInit {
  id: any;
  oneProduct: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ProductService
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }
  ngOnInit(): void {
    this.getProductDetails()
  }
  getProductDetails() {
    this.service.getProductById(this.id).subscribe((data: any) => {
      this.oneProduct = data;
      console.log(this.oneProduct);
    });
  }
}
