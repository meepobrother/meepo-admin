import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { DirectivesModule } from '../directives';

// components
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TreeviewMenuComponent } from './treeview-menu/treeview-menu.component';
import { SlidebarFormComponent } from './slidebar-form/slidebar-form.component';
import { SlidebarUserComponent } from './slidebar-user/slidebar-user.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

const COMPONENTS = [
  HeaderComponent,
  NavComponent,
  SidebarComponent,
  TreeviewMenuComponent,
  SlidebarFormComponent,
  SlidebarUserComponent,
  ControlSidebarComponent,
  FooterComponent,
  BreadcrumbComponent
]

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class ShareModule { }
