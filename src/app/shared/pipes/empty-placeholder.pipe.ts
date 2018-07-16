import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'emptyPlaceholder'
})
export class EmptyPlaceholderPipe implements PipeTransform{
  transform(value: any, ...args: any[]): any {
    if (value === null || value === undefined || value === '') {
      return '–';
    }
    return value;
  }
}
