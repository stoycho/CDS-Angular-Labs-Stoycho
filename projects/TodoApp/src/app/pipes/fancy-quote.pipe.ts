import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fancyQuote'
})
export class FancyQuotePipe implements PipeTransform {

  transform(val) {
    // console.log(val);

    return `!!!${val}!!!`;
  }

}
