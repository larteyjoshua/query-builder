import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[libQueryButtonGroup]'
})
export class QueryButtonGroupDirective {
  constructor(public template: TemplateRef<any>) {}

}
