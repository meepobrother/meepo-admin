import { Action } from '@ngrx/store';
import { createSelector } from '@ngrx/store';

export interface State {
    nickname: string;
    avatar: string;
    tag: string;
    icon: string;
    desc: string;
}

export const initialState: State = {
    nickname: 'Alexander Pierce',
    avatar: 'assets/img/user2-160x160.jpg',
    tag: 'online',
    icon: 'fa fa-circle text-success',
    desc: 'Member since Nov. 2012'
}


export function reducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        default:
            return state;
    }
}