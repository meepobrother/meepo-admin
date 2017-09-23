import { Action, StoreModule } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import { NgModule } from '@angular/core';
import * as sidebarToggleReducer from './slidebar-toggle/reducer';
import * as configReducer from './config/reducer';
import * as slidebarReducer from './slidebar/reducer';
import * as userReducer from './user/reducer';
import * as navbarReducer from './navbar/reducer';
import * as controlSidebarReducer from './control-sidebar/reducer';

import * as pagesDashboardReducer from './pages/dashboard/reducer';



export interface State {
    sidebarToggle: sidebarToggleReducer.State;
    config: configReducer.State;
    slidebar: slidebarReducer.State;
    user: userReducer.State;
    navbar: navbarReducer.State;
    controlSidebar: controlSidebarReducer.State;
    pagesDashboard: pagesDashboardReducer.State;
}

export const initialState: State = {
    sidebarToggle: sidebarToggleReducer.initialState,
    config: configReducer.initialState,
    slidebar: slidebarReducer.initialState,
    user: userReducer.initialState,
    navbar: navbarReducer.initialState,
    controlSidebar: controlSidebarReducer.initialState,
    pagesDashboard: pagesDashboardReducer.initialState
};

export const reducers = {
    sidebarToggle: sidebarToggleReducer.reducer,
    config: configReducer.reducer,
    slidebar: slidebarReducer.reducer,
    user: userReducer.reducer,
    navbar: navbarReducer.reducer,
    controlSidebar: controlSidebarReducer.reducer,
    pagesDashboard: pagesDashboardReducer.reducer
};

@NgModule({
    imports: [
        StoreModule.forRoot(reducers)
    ]
})
export class AppStore {

}
