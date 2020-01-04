import * as types from '../constants/actionTypes';

const initialState = {
  vendorItems: ['asd000', 'asddas', 'sgsfdgd'],
  productPrice: ['1', '5', '7'],
  vendorName: '',
  marketName: '',
  blogPost: '',
  counter: 0,
}

const vendorReducer = (state = initialState, action) => {
  let display;
  switch (action.type) {

    case types.SUBMIT_VENDOR: {
      let {vendorItems,productPrice,vendorName,marketName,blogPost,counter} = state;
      
      let senderObj = {
        vendorItems,
        productPrice,
        vendorName,
        marketName,
        blogPost,
      }
      console.log("sender Object", senderObj);
      counter = 0;

      return {
        ...state,
        vendorItems: [''],
        productPrice: [''],
        vendorName: '',
        marketName: '',
        blogPost: '',
        counter: 0,
      }
    }

    case types.UPDATE_ITEM_DETAILS: {
      console.log('updating the items');
      let { vendorItems, productPrice, counter } = state;
      switch (action.payload.className) {
        case "vendorItems": {
          let input = (action.payload.id).slice(2); //grab the number of the array from within the ID
          let index = Number(input);

          vendorItems[index] = action.payload.value
          counter += 1;
          return {
            ...state,
            vendorItems: vendorItems,
            counter: counter
          }
        }
        case "productPrice": {
          console.log('updating the price');
          let input = (action.payload.id).slice(2); //grab the number of the array from within the ID
          let index = Number(input);

          productPrice[index] = action.payload.value
          counter -= 1;
          return {
            ...state,
            productPrice: productPrice,
            counter: counter
          }
        }
      }
      return {
        ...state,
      }
    }


    case types.ADD_ITEM: {
      let { vendorItems, productPrice, counter } = state;

      vendorItems.push('');
      productPrice.push('');
      counter += 1;

      return {
        ...state,
        counter: counter,
        vendorItems: vendorItems,
        productPrice: productPrice,
      }
    }
    case types.UPDATE_VENDOR_DETAILS: {
      switch (action.payload.id) {
        case "vendorName": {
          return {
            ...state,
            vendorName: action.payload.string
          }
        }
        case "marketName": {
          return {
            ...state,
            marketName: action.payload.string
          }
        }
        case "blogPost": {
          return {
            ...state,
            blogPost: action.payload.string
          }
        }

      }

      return {
        ...state,
      }
    }
    default:
      return state;
  }
}


export default vendorReducer;