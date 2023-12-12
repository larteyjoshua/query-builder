import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[libQuerySwitchGroup]'
})
export class QuerySwitchGroupDirective {

  constructor(public template: TemplateRef<any>) {}

}
