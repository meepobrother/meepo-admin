import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ShareModule } from '@meepo/share';
import { AppStore } from '@meepo/redux';
import { PagesModule } from '@meepo/pages';
import { ComponentsModule } from '@meepo/components';

import { DirectivesModule } from './directives';
import { DialogComponent } from './tests/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    ShareModule,
    AppStore,
    PagesModule,
    ComponentsModule,
    DirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
