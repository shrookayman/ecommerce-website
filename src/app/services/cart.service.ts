import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient: HttpClient) { }
  
  headers:any={
     token: localStorage.getItem('userToken')
  }
  addToCart(productId:string):Observable<any>{
    return this._HttpClient.post(`https://route-ecommerce.onrender.com/api/v1/cart`,
          {productId:productId}
          // {headers : this.headers}

    )
  }

  getLoggedUserCart():Observable<any>{
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/cart`
          // {headers : this.headers}

    )
  }

  removeItem(productId:string){
    return this._HttpClient.delete(`https://route-ecommerce.onrender.com/api/v1/cart/${productId}`
    // {headers : this.headers}

    )
  }

  updateItemCount(productId:string , count:number):Observable<any>{
    return this._HttpClient.put(`https://route-ecommerce.onrender.com/api/v1/cart/${productId}`,

          {count:count}
          // {headers : this.headers}

    )
  }

}

