import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient : HttpClient , private _Router : Router) { }
   userData = new BehaviorSubject(null);

  saveUserData(){
    let encodeUserData = JSON.stringify(localStorage.getItem('userToken'));
    let decodeed : any =  jwtDecode(encodeUserData);
    this.userData.next(decodeed); 
    console.log(decodeed);
  }
    register(userData:Object ): Observable<any>{
      return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signup', userData);
    }
    login(formData:object):Observable<any>{
      return this._HttpClient.post( `https://route-ecommerce.onrender.com/api/v1/auth/signin`, formData);
    }


    logout(){
      localStorage.removeItem('userToken');
      this.userData.next(null);
      this._Router.navigate(['/login']);
    }
  
}
