import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
products: any = [];
searchTerm : string = '';

  constructor(private _ProductsService : ProductsService){}


  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
          next: (response)=> this.products = response.data

    });
  }


  

  

}
