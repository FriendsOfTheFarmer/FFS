import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers/index';
import thunk from 'redux-thunk';

const composeEnhancer = composeWithDevTools({}) || compose;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk)) //if this breaks look here
);

export default store;