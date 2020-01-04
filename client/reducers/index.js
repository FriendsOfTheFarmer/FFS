import { combineReducers } from 'redux';

import aReducer from './aReducer';
import vendorReducer from './vendorReducer';
import renderingReducer from './renderingReducer';

const reducers = combineReducers({
  generic: aReducer,
  vendor: vendorReducer,
  rendering: renderingReducer
})


export default reducers;