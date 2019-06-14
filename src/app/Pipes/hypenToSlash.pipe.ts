

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'hyphenToSlash' })
export class HyphenSlashPipe implements PipeTransform {
  transform(inputString: string): string {
    inputString = inputString.replace('-', '/');
    return inputString
  }
}