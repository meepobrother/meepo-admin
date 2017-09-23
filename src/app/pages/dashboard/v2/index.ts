import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { V2RoutingModule } from './v2-routing.module';
import { V2Component } from './v2.component';


import { InfoBoxModule,BoxModule } from '../../../components';

const COMPONENTS = [
  InfoBoxModule,
  BoxModule
];

@NgModule({
  imports: [
    CommonModule,
    V2RoutingModule,
    ...COMPONENTS
  ],
  declarations: [V2Component]
})
export class V2Module { }
