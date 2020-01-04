import { combineReducers } from 'redux';

import aReducer from './aReducer';

const reducers = combineReducers({
  generic: aReducer
})


export default reducers;