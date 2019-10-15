import { createStore, combineReducers, applyMiddleware, DeepPartial } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { systemReducer } from './system/reducers';
import { jokesReducer } from './jokes/reducers';
import { ICombinedState } from '../types';

const rootReducer = combineReducers({
  system: systemReducer,
  jokes: jokesReducer,
});

function configureStore(preloadedState?: DeepPartial<ICombinedState>) {
  const middleware: any[] = [];
  const middlewareEnhancer = applyMiddleware(...middleware);

  const enhancers: any[] = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}

export { configureStore };
