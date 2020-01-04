import * as types from '../constants/actionTypes';


export const vendorDisplayToggle = () => ({
  type: types.VENDOR_DISPLAY_TOGGLE,
});

export const customerDisplayToggle = () => ({
  type: types.CUSTOMER_DISPLAY_TOGGLE,
});



//a generic action to follow into the reducer and the container
export const anAction = () => ({
  type: types.AN_ACTION,
});

//this updates the vendor details in the form to the state
export const updateVendorDetails = (str, id) => ({
  type: types.UPDATE_VENDOR_DETAILS,
  payload: {string: str, id: id}
})

//this will be our submit vendor, taking all the information in the state and sending it to the server/DB
export const submitVendor = () => ({
  type: types.SUBMIT_VENDOR,
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
  payload: {value: value, id: id, className: className}
})



//left in for reference on REDUX-THUNK Shenanigans 
// export const findDeviceAsyncThunk = (name) => {
//   console.log('inside findDeviceThunk')
//   console.log('searching with', name);
//   return dispatch => {
//     dispatch(findThunkDeviceStarted());



//     fetch(`/api/?id=${name}`)
//     .then(response => response.json())
//     .then(deviceFound => {
//       setTimeout(() => {
//         console.log("device found",deviceFound)
//         dispatch(findThunkDeviceSuccess(deviceFound));
//       }, 2500);
//       // console.log("device found",deviceFound)
//       // dispatch(findThunkDeviceSuccess(deviceFound));
//     })
//     .catch(err => {
//       dispatch(findThunkDeviceFail(err));
//     })
//   };
// };


// const findThunkDeviceStarted = () => ({
//   type: types.FIND_THUNK_DEVICE_STARTED
// });

// const findThunkDeviceSuccess = deviceFound => ({
//   type: types.FIND_THUNK_DEVICE_SUCCESS,
//   payload: {
//     ...deviceFound
//   }
// });

// const findThunkDeviceFail = error => ({
//   type: types.FIND_THUNK_DEVICE_FAIL,
//   payload: {
//     error
//   }
// });
