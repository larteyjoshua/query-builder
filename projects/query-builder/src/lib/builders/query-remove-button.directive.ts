import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[libQueryRemoveButton]'
})
export class QueryRemoveButtonDirective {

  constructor(public template: TemplateRef<any>) {}

}
