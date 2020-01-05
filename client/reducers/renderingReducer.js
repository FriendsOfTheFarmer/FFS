import * as types from '../constants/actionTypes';

const initialState = {
  vendorDisplayTog: false,
  customerDisplayTog: false,
  vendorItemTog: false,
}

const renderingReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.VENDOR_ITEM_TOGGLE: {
      let {vendorItemTog} = state;
      vendorItemTog = !vendorItemTog
      return {
        ...state,
        vendorItemTog,
      }
    }


    case types.VENDOR_DISPLAY_TOGGLE: {
      let {vendorDisplayTog, customerDisplayTog} = state;
      vendorDisplayTog = !vendorDisplayTog
      customerDisplayTog = false;
      return {
        ...state,
        vendorDisplayTog,
        customerDisplayTog
      }
    }

    case types.CUSTOMER_DISPLAY_TOGGLE: {
      let {vendorDisplayTog, customerDisplayTog} = state;
      customerDisplayTog = !customerDisplayTog
      vendorDisplayTog = false;
      return {
        ...state,
        vendorDisplayTog,
        customerDisplayTog
      }
    }

    default:
      return state;
  }
}


export default renderingReducer;