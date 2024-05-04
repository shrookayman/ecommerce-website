import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

import {  OwlOptions } from 'ngx-owl-carousel-o';

HttpClient
@Component({
  selector: 'app-categoriesslider',
  templateUrl: './categoriesslider.component.html',
  styleUrls: ['./categoriesslider.component.css']
})
export class CategoriessliderComponent implements OnInit{

  constructor(private __HttpClient : HttpClient , private _CategoriesService : CategoriesService){}
  categories: any = [];
  ngOnInit(): void {
   this._CategoriesService.getcategories().subscribe({
     next:(response)=>{
      this.categories = response.data
     }

   });


  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
      1040: {
        items: 5
      },
      1440: {
        items: 6
      }
    },
    nav: true
  }

}
