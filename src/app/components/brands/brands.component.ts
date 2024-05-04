import { Component, OnInit } from '@angular/core';
import { BrandsService } from 'src/app/services/brands.service';
BrandsService
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit{

  brands: any = [];

  constructor(private _BrandsService :BrandsService ){}


  ngOnInit(): void {
    this._BrandsService.getbrands().subscribe({
          next: (response)=> this.brands = response.data

    });
  }

}