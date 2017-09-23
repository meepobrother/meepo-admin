import { Action } from '@ngrx/store';
import { createSelector } from '@ngrx/store';

export interface State {
    infoboxs: any[]
}

export const initialState: State = {
    infoboxs: [
        {
            color: 'info-box-icon bg-aqua',
            icon: 'ion ion-ios-gear-outline',
            text: 'CPU Traffic',
            number: '90',
            unit: '%'
        },
        {
            color: 'info-box-icon bg-red',
            icon: 'fa fa-google-plus',
            text: 'Likes',
            number: '41,410',
            unit: ''
        },
        {
            color: 'info-box-icon bg-green',
            icon: 'ion ion-ios-cart-outline',
            text: 'Sales',
            number: '760',
            unit: ''
        },
        {
            color: 'info-box-icon bg-yellow',
            icon: 'ion ion-ios-people-outline',
            text: 'New Members',
            number: '2,000',
            unit: ''
        }
    ]
}


export function reducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        default:
            return state;
    }
}
