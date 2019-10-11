import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { systemReducer } from './system/reducers';
import { jokesReducer } from './jokes/reducers';

const rootReducer = combineReducers({
  system: systemReducer,
  jokes: jokesReducer,
});

function configureStore(preloadedState?: any) {
  const middleware: any[] = [];
  const middlewareEnhancer = applyMiddleware(...middleware);

  const enhancers: any[] = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}

export { configureStore };
