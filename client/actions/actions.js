import * as types from '../constants/actionTypes';

export const anAction = () => ({
  type: types.AN_ACTION,
});

export const updateVendorDetails = (str, id) => ({
  type: types.UPDATE_VENDOR_DETAILS,
  payload: {string: str, id: id}
})

export const submitVendor = () => ({
  type: types.SUBMIT_VENDOR,
})

export const addItem = () => ({
  type: types.ADD_ITEM,
})

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
