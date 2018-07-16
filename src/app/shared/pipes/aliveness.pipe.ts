import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'aliveness'
})
export class AlivenessPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (value === true) {
      return 'Alive';
    } else if (value === false) {
      return 'Dead';
    }
    return value;
  }
}
