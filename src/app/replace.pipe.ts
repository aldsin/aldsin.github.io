import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {
  transform(str: string, term: string, replacement: string): any {
    return str.replace(new RegExp(term, 'g'), replacement);
  }
}
