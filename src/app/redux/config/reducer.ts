import { Action } from '@ngrx/store';
import { createSelector } from '@ngrx/store';

export interface State {
    pre: string;
    title: string;
    minTitle: string;
}

export const initialState: State = {
    pre: 'M',
    title: '同城',
    minTitle: 'R'
}


export function reducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        default:
            return state;
    }
}
