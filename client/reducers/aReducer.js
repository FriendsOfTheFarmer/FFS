import * as types from '../constants/actionTypes';

const initialState = {
  display: 'tester',
}

const aReducer = (state = initialState, action) => {
  let display;
  switch (action.type) {
    case types.AN_ACTION: {
      console.log('sending a post');
      fetch("/api/", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
      })
      return {
        ...state,
      }
    }
    default:
      return state;
  }
}


export default aReducer;