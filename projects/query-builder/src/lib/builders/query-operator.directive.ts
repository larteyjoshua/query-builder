import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[libQueryOperator]'
})
export class QueryOperatorDirective {

  constructor(public template: TemplateRef<any>) {}

}
