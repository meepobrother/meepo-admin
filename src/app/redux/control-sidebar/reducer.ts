import { Action } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import * as actions from './action';
export interface State {
    open: boolean;
}

export const initialState: State = {
    open: false
}

export function reducer(state: State = initialState, action: actions.Actions): State {
    switch (action.type) {
        case actions.TOGGLE:
            return {open: !state.open}
        default:
            return state;
    }
}
