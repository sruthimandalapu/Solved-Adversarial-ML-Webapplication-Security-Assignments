import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fc'
})
export class FcPipe implements PipeTransform {

  transform(value1: number, value2: string): unknown {
    if(value2=='c'){
      return ((value1-32)*(5/9)).toFixed(2);
    }
    else{
      return ((value1*9/5)+32).toFixed(2);
    }
  }

}
