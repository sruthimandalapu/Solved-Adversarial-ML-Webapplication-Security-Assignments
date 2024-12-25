import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(cost:number,discount:number): unknown {
    return cost-cost*(discount/100);
  }

}
