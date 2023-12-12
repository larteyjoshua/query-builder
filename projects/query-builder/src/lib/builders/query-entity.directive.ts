import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[libQueryEntity]'
})
export class QueryEntityDirective {

  constructor(public template: TemplateRef<any>) {}

}
