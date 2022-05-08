import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateformat'
})
export class DateformatPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let tzoffset = (new Date(value)).getTimezoneOffset() * 60000;
    console.log(tzoffset)
    let miniOffSet = new Date(value).getTime() - tzoffset;
    let localISOTime = (new Date(miniOffSet)).toISOString().replace('Z', '').replace('T', ' ');
    return localISOTime;
  }

}
