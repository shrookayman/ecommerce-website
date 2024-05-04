import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _HttpClient:HttpClient) { }

  getcategories():Observable<any>{
    return this._HttpClient.get('https://route-ecommerce.onrender.com/api/v1/categories')
  }


}
