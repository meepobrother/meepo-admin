import { Action } from '@ngrx/store';
export const TOGGLE =           '[redux control sidebar] open';

export class OpenAction implements Action {
  readonly type = TOGGLE;
  constructor(public payload: any) { }
}


export type Actions
= OpenAction;