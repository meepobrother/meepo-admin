export { SidebarToggleDirective } from './sidebar-toggle.directive';
import { SidebarToggleDirective } from './sidebar-toggle.directive';

import { ForInDirective } from './for-in/for-in.directive';

import { NgModule } from '@angular/core';
@NgModule({
    declarations: [
        SidebarToggleDirective,
        ForInDirective
    ],
    exports: [
        SidebarToggleDirective,
        ForInDirective
    ]
})
export class DirectivesModule {

}

