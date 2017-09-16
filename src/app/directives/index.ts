import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarToggleDirective } from './sidebar-toggle.directive';

const DIRECTIVES = [
  SidebarToggleDirective
]

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
export class DirectivesModule { }
