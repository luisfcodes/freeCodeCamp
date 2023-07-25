import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number, pattern: string, currency: string, ...args: unknown[]): unknown {
    return value.toLocaleString(pattern, { style: 'currency', currency });
  }

}
