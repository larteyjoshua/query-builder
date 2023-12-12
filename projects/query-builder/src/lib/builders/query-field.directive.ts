import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[libQueryField]'
})
export class QueryFieldDirective {

  constructor(public template: TemplateRef<any>) {}

}
