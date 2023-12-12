import { NgModule } from '@angular/core';
import { QueryBuilderComponent } from './components/query-builder/query-builder.component';
import { QueryOperatorDirective } from './builders/query-operator.directive';
import { QueryFieldDirective } from './builders/query-field.directive';
import { QueryEntityDirective } from './builders/query-entity.directive';
import { QueryButtonGroupDirective } from './builders/query-button-group.directive';
import { QuerySwitchGroupDirective } from './builders/query-switch-group.directive';
import { QueryRemoveButtonDirective } from './builders/query-remove-button.directive';
import { QueryEmptyWarningDirective } from './builders/query-empty-warning.directive';
import { QueryArrowIconDirective } from './builders/query-arrow-icon.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    QueryBuilderComponent,
    QueryOperatorDirective,
    QueryFieldDirective,
    QueryEntityDirective,
    QueryButtonGroupDirective,
    QuerySwitchGroupDirective,
    QueryRemoveButtonDirective,
    QueryEmptyWarningDirective,
    QueryArrowIconDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    QueryBuilderComponent,
    QueryOperatorDirective,
    QueryFieldDirective,
    QueryEntityDirective,
    QueryButtonGroupDirective,
    QuerySwitchGroupDirective,
    QueryRemoveButtonDirective,
    QueryEmptyWarningDirective,
    QueryArrowIconDirective
  ]
})
export class QueryBuilderModule { }
