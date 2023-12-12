import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[libQueryArrowIcon]'
})
export class QueryArrowIconDirective {

  constructor(public template: TemplateRef<any>) {}

}
