import { Pages } from './constants';
import { ISystemState } from './store/system/types';
import { IJokesState } from './store/jokes/types';

export interface ICombinedState {
  system: ISystemState;
  jokes: IJokesState;
}

export type TErrorPages = Pages.NOTFOUND;
export type TNavPages = Exclude<Pages, TErrorPages>;

export interface IJoke {
  id: number;
  joke: string;
  categories: string[];
}
