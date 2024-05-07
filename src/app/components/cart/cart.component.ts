import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor( private _CartService : CartService){}

  // productId : any ;
  productDetails: any = [];
  removeItem(productId :string){
    this._CartService.removeItem(productId).subscribe({
      next:(response)=> {
        this.productDetails = response ,
        console.log(response)
      },
      error:(err)=> console.log(err)
     })
  }


  updateItemCount(productId :string , count : number){
    this._CartService.updateItemCount(productId , count).subscribe({
      next:(response)=> {
        this.productDetails = response.data ,
        console.log(response)
      },
      error:(err)=> console.log(err)
     })
  }
  
  ngOnInit(): void {
     this._CartService.getLoggedUserCart().subscribe({
      next:(response)=> {
        this.productDetails = response.data,
        console.log(response.data)
      },
      error:(err)=> console.log(err)
     })
  }

 

}
