import { Action } from '@ngrx/store';
import { createSelector } from '@ngrx/store';

export interface State {
    items: any[]
}

export const initialState: State = {
    items: [
        {
            icon: 'fa fa-envelope-o',
            label: {
                title: '4',
                class: 'label label-success'
            }
        },
        {
            icon: 'fa fa-bell-o',
            label: {
                title: '10',
                class: 'label label-warning'
            }
        },
        {
            icon: 'fa fa-flag-o',
            label: {
                title: '9',
                class: 'label label-danger'
            }
        }
    ]
}


export function reducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        default:
            return state;
    }
}
