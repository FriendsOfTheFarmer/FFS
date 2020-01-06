import * as types from "../constants/actionTypes";


const initialState = {
  arrayOfMarkets: [""],
  vendorList: [
    "Hilton Honey",
    "Dirty Danzing",
    "SarahSalads",
    "LukesLavendarLillys"
  ],
  marketDisplayTog: false,

  loading: false,
  error: null,
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FIND_ALL_MARKET_SUCCESS: {
      console.log(action.payload)
      let marketArray = [];
      for (let i = 0; i < action.payload.marketsFound.length; i++) {
        marketArray.push(action.payload.marketsFound[i].market_name);
      }
      console.log(marketArray);
      return {
        ...state,
        arrayOfMarkets: marketArray,
        loading: false
      }
    }

    case types.FETCHING_STARTED: {
      console.log("HEY WE'RE STARTING NOW IN THE CUSTOMER REDUCER")
      return {
        ...state,
        loading: true
      }
    }

    case types.FETCHING_FAIL: {
      console.log(action.payload)
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }

    case types.MARKET_DISPLAY_TOGGLE: {
      let { marketDisplayTog } = state;
      marketDisplayTog = !marketDisplayTog;
      return {
        ...state,
        marketDisplayTog
      };
    }
    default:
      return state;
  }
};

export default customerReducer;
