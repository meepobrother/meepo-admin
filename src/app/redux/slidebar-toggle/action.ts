import { Action } from '@ngrx/store';

export const TOGGLE =           '[share redux sidebar] toggle';

export class ToggleAction implements Action {
  readonly type = TOGGLE;
  constructor() { }
}

export type Actions
= ToggleAction;