import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/product';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
   this.getProductsAll();
  }

  public getProductsAll(){
    this.productService.getProducts().subscribe(data=>{
      console.log(data)
      this.products=data
    }
      );
  }

}
