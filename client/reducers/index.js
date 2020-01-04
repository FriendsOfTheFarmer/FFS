import { combineReducers } from 'redux';

import aReducer from './aReducer';
import vendorReducer from './vendorReducer';
import renderingReducer from './renderingReducer';
import customerReducer from './customerReducer';

const reducers = combineReducers({
  generic: aReducer,
  vendor: vendorReducer,
  rendering: renderingReducer,
  customer: customerReducer

})


export default reducers;