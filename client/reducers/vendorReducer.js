import * as types from "../constants/actionTypes";

const initialState = {
  vendorItems: [""],
  productPrice: [""],
  productDetails: [""],
  dateDetails: [""],
  itemLocation: [""],
  vendorName: "",
  vendorBio: "",
  vendorEmail: "",
  vendorWebsite: "",
  vendorPhone: "",
  counter: 0
};

const vendorReducer = (state = initialState, action) => {
  let display;
  switch (action.type) {
      case types.SUBMIT_VENDOR_DETAILS: {
      let {
        vendorName,
        vendorBio,
        vendorEmail,
        vendorWebsite,
        vendorPhone,
        counter
      } = state;
      let senderObj = {
        vendor_name: vendorName,
        vendor_bio: vendorBio,
        vendor_email: vendorEmail,
        vendor_website: vendorWebsite,
        vendor_phone: vendorPhone
      };
      console.log("sender Object", senderObj);
      fetch("/api/vendor-post", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(senderObj),
      })
      //put fetch request to write the object to the server
      counter = 0;
      return {
        ...state,
        vendorEmail: "",
        vendorWebsite: "",
        vendorPhone: "",
        vendorBio: "",
        counter: 0
      };
      
    }

    case types.SUBMIT_ITEM_DETAILS: {
      console.log("in submit item details")
      let {
        vendorItems,
        productPrice,
        productDetails,
        dateDetails,
        itemLocation,
        vendorName,
        counter
      } = state;
      let senderObj = {
        item_name: vendorItems,
        vendor_item_price: productPrice,
        vendor_item_details: productDetails,
        market_vendor_date: dateDetails,
        market_name: itemLocation,
        vendor_name: vendorName,
      };
      console.log("sender Object", senderObj);
      fetch("/api/vendor-items", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(senderObj),
      })
      counter = 0;
      return {
        ...state,
        vendorItems: [""],
        productPrice: [""],
        productDetails: [""],
        dateDetails: [""],
        itemLocation: [""],
        vendorName: "",
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
        itemLocation,
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
        case "itemLocation": {
          console.log("updating the date");
          let input = action.payload.id.slice(2); //grab the number of the array from within the ID
          let index = Number(input);

          itemLocation[index] = action.payload.value;
          counter -= 1;
          return {
            ...state,
            itemLocation: itemLocation,
            counter: counter
          };
        }
      }
      return {
        ...state
      };
    }

    case types.ADD_ITEM: {
      let { vendorItems, productPrice, productDetails, dateDetails, itemLocation, counter } = state;

      vendorItems.push("");
      productPrice.push("");
      productDetails.push("");
      dateDetails.push("");
      itemLocation.push("");
      counter += 1;

      return {
        ...state,
        counter: counter,
        vendorItems: vendorItems,
        productPrice: productPrice,
        productDetails: productDetails,
        dateDetails: dateDetails,
        itemLocation: itemLocation
      };
    }
    case types.UPDATE_VENDOR_DETAILS: {
      console.log('updating vendor')
      switch (action.payload.id) {
        case "vendorName": {
          return {
            ...state,
            vendorName: action.payload.string
          };
        }
        case "vendorBio": {
          return {
            ...state,
            vendorBio: action.payload.string
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
