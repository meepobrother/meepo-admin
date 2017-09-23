export { InfoBoxModule } from './info-box';
export { BoxModule } from './box';
export { TestMdModule } from './test-md';

import { InfoBoxModule } from './info-box';
import { BoxModule } from './box';
import { TestMdModule } from './test-md';
import { CardModule } from './card';
import { TabModule } from './tab';

import { TableModule } from './table';
import { DraggableListModule } from './draggable-list';
import { DialogModule } from './dialog';
import { OverlayModule } from './overlay';
import { SelectsModule } from './selects';

const COMPONENTSMODULES = [
    InfoBoxModule,
    BoxModule,
    TestMdModule,
    TabModule,
    CardModule,
    TableModule,
    DraggableListModule,
    DialogModule,
    OverlayModule,
    SelectsModule
];

import { NgModule } from '@angular/core';
@NgModule({
    imports: [
        ...COMPONENTSMODULES
    ],
    exports: [
        ...COMPONENTSMODULES
    ]
})
export class ComponentsModule {

}
