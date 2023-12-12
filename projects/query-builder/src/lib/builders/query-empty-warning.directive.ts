import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[libQueryEmptyWarning]'
})
export class QueryEmptyWarningDirective {
  constructor(public template: TemplateRef<any>) {}

}
