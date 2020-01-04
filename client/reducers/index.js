import { combineReducers } from 'redux';

import aReducer from './aReducer';
import vendorReducer from './vendorReducer';

const reducers = combineReducers({
  generic: aReducer,
  vendor: vendorReducer
})


export default reducers;