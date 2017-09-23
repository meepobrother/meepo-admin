import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardHeaderDirective } from './header/card-header.directive';
import { CardFooterDirective } from './footer/card-footer.directive';
import { CardBodyDirective } from './body/card-body.directive';

const DIRECTIVES = [
  CardComponent, CardHeaderDirective, CardFooterDirective, CardBodyDirective
];
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...DIRECTIVES
  ],
  exports: [
    ...DIRECTIVES
  ]
})
export class CardModule { }
