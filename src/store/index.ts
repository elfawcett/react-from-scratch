import { createStore, combineReducers, applyMiddleware, DeepPartial } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { systemReducer } from './system/reducers';
import { jokesReducer } from './jokes/reducers';
import { favoritesReducer } from './favorites/reducers';

const rootReducer = combineReducers({
  system: systemReducer,
  jokes: jokesReducer,
  favorites: favoritesReducer,
});

export type TAppState = ReturnType<typeof rootReducer>;

function configureStore(preloadedState?: DeepPartial<TAppState>) {
  const middleware: any[] = [thunk];
  const middlewareEnhancer = applyMiddleware(...middleware);

  const enhancers: any[] = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}

export { configureStore };
