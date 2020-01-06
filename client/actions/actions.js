import * as types from '../constants/actionTypes';


export const vendorDisplayToggle = () => ({
  type: types.VENDOR_DISPLAY_TOGGLE,
});

export const customerDisplayToggle = () => ({
  type: types.CUSTOMER_DISPLAY_TOGGLE,
});

export const vendorItemToggle = () => ({
  type: types.VENDOR_ITEM_TOGGLE,
})

export const readyToggle = () => ({
  type: types.READY_TOGGLE,
})

//a generic action to follow into the reducer and the container
export const anAction = () => ({
  type: types.AN_ACTION,
});

//this updates the vendor details in the form to the state
export const updateVendorDetails = (str, id) => ({
  type: types.UPDATE_VENDOR_DETAILS,
  payload: { string: str, id: id }
})

//this will be our submit vendor, taking all the information in the state and sending it to the server/DB

export const submitVendorDetails = () => ({
  type: types.SUBMIT_VENDOR_DETAILS,
})

export const submitItemDetails = () => ({
  type: types.SUBMIT_ITEM_DETAILS,
})

//adding an additional item to the form (see the two arrays in vendorReducer)
export const addItem = () => ({
  type: types.ADD_ITEM,
})


//updating information in the array of items/prices
//value is th target value (string), id is the id of the component (indicates the number in the array it corresponds to)
//classname is the items or the prices for the items (which array we need to update)
export const updateItemDetails = (value, id, className) => ({
  type: types.UPDATE_ITEM_DETAILS,
  payload: { value: value, id: id, className: className }
})


// This area begins our Market display actions

export const marketDisplayToggle = () => ({
  type: types.MARKET_DISPLAY_TOGGLE,
})









//left in for reference on REDUX-THUNK Shenanigans 
//this is invoked when the customer button dropdown is clicked
//we're npt assing anything in because we are grabbing all 
export const findAllMarketAsyncThunk = () => {
  console.log('INSIDE FIND ALL MARKET ASYNC THUNK!!')
  return dispatch => {
    dispatch(fetchingStarted());

    //we could have the same message for start and fail 
    fetch(`/api/`)
      .then(response => response.json())
      .then(marketsFound => {
        console.log("Market FOUND!!", marketsFound)
        //unique here 
        dispatch(findAllMarketSuccess(marketsFound));
      })
      .catch(err => {
        dispatch(fetchingFail(err));
      })
  }
}

export const findAllVendorsPerMarketAsyncThunk = (marketName) => {
  console.log('INSIDE FIND ALL VENDORS PER MARKET ASYNC THUNK!!')
  console.log(marketName);
  return dispatch => {
    dispatch(fetchingStarted());

    //we could have the same message for start and fail 
    fetch(`/api/market-vendors/?market_name=${marketName}`)
      .then(response => response.json())
      .then(vendorFound => {
        console.log("Vendor Found!!", vendorFound)
        //unique here 
        dispatch(findAllVendorsPerMarketSuccess(vendorFound));
      })
      .catch(err => {
        dispatch(fetchingFail(err));
      })
  }
}



const findAllMarketSuccess = marketsFound => ({
  type: types.FIND_ALL_MARKET_SUCCESS,
  payload: {
    marketsFound
  }
});

const findAllVendorsPerMarketSuccess = vendorsFound => ({
  type: types.FIND_ALL_VENDORS_PER_MARKET_SUCCESS,
  payload: {
    vendorsFound
  }
});

const fetchingStarted = () => ({
  type: types.FETCHING_STARTED
});

const fetchingFail = error => ({
  type: types.FETCHING_FAIL,
  payload: {
    error
  }
})