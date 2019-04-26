import {DomSanitizer} from '@angular/platform-browser';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'safeHtml'})
export class Safe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(style) {
    return this.sanitizer.bypassSecurityTrustHtml(style);
  }
}
