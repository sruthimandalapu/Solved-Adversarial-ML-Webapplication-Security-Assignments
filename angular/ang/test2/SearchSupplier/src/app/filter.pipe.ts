import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  
  transform(value: string,value1:string): unknown {
    if(value.toLowerCase().includes(value1.toLowerCase())){
      return true;
    }
    else{
      return false;
    }
  }

}
