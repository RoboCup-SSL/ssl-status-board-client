import {Pipe, PipeTransform} from '@angular/core';
import {String} from 'typescript-string-operations';


@Pipe({
  name: 'minuteSeconds'
})
export class MinuteSecondsPipe implements PipeTransform {

  transform(value: number): string {
    const seconds: number = Math.round(Math.abs(value) / 1000000);
    const minutes: number = Math.floor(seconds / 60);
    const fullSeconds: number = seconds - minutes * 60;
    return String.Format('{0:0}:{1:00}', Math.sign(value) * minutes, fullSeconds);
  }
}
