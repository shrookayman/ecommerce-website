import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products: any = [];
searchTerm : string = '';

  constructor(private _ProductsService : ProductsService , private _CartService : CartService){}


  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
          next: (response)=> this.products = response.data

    });

    
  }

  addToCart(productId: string){
    this._CartService.addToCart(productId).subscribe({
     next: (response)=> console.log(response),
     error: (err)=> console.log(err),
     
    })
 }
}
