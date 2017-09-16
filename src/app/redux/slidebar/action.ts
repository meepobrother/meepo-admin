import { Action } from '@ngrx/store';

export const TOGGLE =           '[redux slidebar] toggle';
export const TOGGLE_CHILD =           '[redux slidebar] toggle child';


export class ToggleAction implements Action {
  readonly type = TOGGLE;
  constructor(public payload: any) { }
}

export class ToggleChildAction implements Action {
  readonly type = TOGGLE_CHILD;
  constructor(public payload: any) { }
}

export type Actions
= ToggleAction
| ToggleChildAction;