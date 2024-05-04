import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../interfaces/products';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products:any[] , searchTerm : string): any[] {

    return products.filter((p)=>p.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }

}
