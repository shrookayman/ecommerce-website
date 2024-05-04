import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  constructor(private __HttpClient : HttpClient , private _CategoriesService : CategoriesService){}
  categories: any = [];
  ngOnInit(): void {
   this._CategoriesService.getcategories().subscribe({
     next:(response)=>{
      this.categories = response.data
     }

   });
  }


}
