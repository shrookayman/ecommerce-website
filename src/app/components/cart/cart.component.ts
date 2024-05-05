import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private _ActivatedRoute: ActivatedRoute , private _ProductsService : ProductsService){}

  productId : any ;
  productDetails: any = [];
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(param)=>{
        this.productId = param.get('id');
        console.log(this.productId);
      }
    });
    this._ProductsService.getProductsDetails(this.productId).subscribe({
      next: (response)=> this.productDetails = response.data
    })
  }

}
