import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { Pages } from './constants';

import { TAppState } from './store';
import { TSystemActions } from './store/system/types';
import { TJokesActions } from './store/jokes/types';
import { TFavoritesActions } from './store/favorites/types';

/* Redux common types */
export interface IRequestAction<T = AnyAction> {
  type: T;
  requesting: boolean;
  err?: any;
}

export type TCombinedActions = TSystemActions | TJokesActions | TFavoritesActions;

/* E = extra argument set during createStore: applyMiddleware(thunk.withExtraArgument(E))  */
export type TThunkResult<R, E = undefined> = ThunkAction<R, TAppState, E, TCombinedActions>;

/* App common types */
export type TErrorPages = Pages.NOTFOUND;
export type TNavPages = Exclude<Pages, TErrorPages>;

/* API common types */
export interface IAPIResult<T = IJoke> {
  type: string;
  value: T;
}

export interface IJoke {
  id: number;
  joke: string;
  categories: string[];
}
