import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repoDate'
})
export class RepoDatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
