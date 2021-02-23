import { Action } from 'redux';

export enum GenericActions {
  LOADING = 'LOADING',
  LOADINGEND = 'LOADINGEND'
}

export const loadingAction = (): Action<GenericActions.LOADING> => {
  return {
    type: GenericActions.LOADING
  };
};

export const loadingEndAction = (): Action<GenericActions.LOADINGEND> => {
  return {
    type: GenericActions.LOADINGEND
  };
};
