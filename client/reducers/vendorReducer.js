import * as types from "../constants/actionTypes";

const initialState = {
  vendorItems: ["evans escargo", "lukes lavender", "dans dates"],
  productPrice: ["1", "5", "7"],
  productDetails: ["tasty snails", "aromatic herbs", "decent fruit"],
  dateDetails: ["12/21/20", "02/22/20", "01/20/20"],
  vendorName: "",
  marketName: "",
  blogPost: "",
  vendorEmail: "",
  vendorWebsite: "",
  vendorPhone: "",
  counter: 0
};

const vendorReducer = (state = initialState, action) => {
  let display;
  switch (action.type) {
    case types.SUBMIT_VENDOR: {
      let {
        vendorItems,
        productPrice,
        productDetails,
        dateDetails,
        vendorName,
        marketName,
        blogPost,
        vendorEmail,
        vendorWebsite,
        vendorPhone,
        counter
      } = state;

      let senderObj = {
        vendorItems,
        productPrice,
        productDetails,
        dateDetails,
        vendorName,
        marketName,
        blogPost,
        vendorEmail,
        vendorWebsite,
        vendorPhone
      };
      console.log("sender Object", senderObj);
      counter = 0;

      return {
        ...state,
        vendorItems: [""],
        productPrice: [""],
        productDetails: [""],
        dateDetails: [""],
        vendorEmail: "",
        vendorWebsite: "",
        vendorPhone: "",
        vendorName: "",
        marketName: "",
        blogPost: "",
        counter: 0
      };
    }

    case types.UPDATE_ITEM_DETAILS: {
      console.log("updating the items");
      let {
        vendorItems,
        productPrice,
        productDetails,
        dateDetails,
        counter
      } = state;
      switch (action.payload.className) {
        case "vendorItems": {
          let input = action.payload.id.slice(2); //grab the number of the array from within the ID
          let index = Number(input);

          vendorItems[index] = action.payload.value;
          counter += 1;
          return {
            ...state,
            vendorItems: vendorItems,
            counter: counter
          };
        }
        case "productPrice": {
          console.log("updating the price");
          let input = action.payload.id.slice(2); //grab the number of the array from within the ID
          let index = Number(input);

          productPrice[index] = action.payload.value;
          counter -= 1;
          return {
            ...state,
            productPrice: productPrice,
            counter: counter
          };
        }
        case "productDetails": {
          console.log("updating the price");
          let input = action.payload.id.slice(2); //grab the number of the array from within the ID
          let index = Number(input);

          productDetails[index] = action.payload.value;
          counter -= 1;
          return {
            ...state,
            productDetails: productDetails,
            counter: counter
          };
        }
        case "dateDetails": {
          console.log("updating the date");
          let input = action.payload.id.slice(2); //grab the number of the array from within the ID
          let index = Number(input);

          dateDetails[index] = action.payload.value;
          counter -= 1;
          return {
            ...state,
            dateDetails: dateDetails,
            counter: counter
          };
        }
      }
      return {
        ...state
      };
    }

    case types.ADD_ITEM: {
      let { vendorItems, productPrice, counter } = state;

      vendorItems.push("");
      productPrice.push("");
      counter += 1;

      return {
        ...state,
        counter: counter,
        vendorItems: vendorItems,
        productPrice: productPrice
      };
    }
    case types.UPDATE_VENDOR_DETAILS: {
      switch (action.payload.id) {
        case "vendorName": {
          return {
            ...state,
            vendorName: action.payload.string
          };
        }
        case "marketName": {
          return {
            ...state,
            marketName: action.payload.string
          };
        }
        case "blogPost": {
          return {
            ...state,
            blogPost: action.payload.string
          };
        }
        case "vendorEmail": {
          return {
            ...state,
            vendorEmail: action.payload.string
          };
        }
        case "vendorWebsite": {
          return {
            ...state,
            vendorWebsite: action.payload.string
          };
        }
        case "vendorPhone": {
          return {
            ...state,
            vendorPhone: action.payload.string
          };
        }
      }

      return {
        ...state
      };
    }
    default:
      return state;
  }
};

export default vendorReducer;
