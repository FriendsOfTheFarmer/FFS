import * as types from '../constants/actionTypes';

export const anAction = () => ({
  type: types.AN_ACTION,
});






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
