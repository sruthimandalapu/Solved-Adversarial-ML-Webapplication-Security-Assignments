import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validate'
})
export class ValidatePipe implements PipeTransform {

  transform(age:number): unknown {
    if(age<18)
    return "Minor";
    else
    return "Major";
  }

}
