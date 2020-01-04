import * as types from '../constants/actionTypes';

const initialState = {
  vendorItems: ['asd000','asddas', 'sgsfdgd'],
  productPrice: ['1','5', '7'],
  vendorName: '',
  marketName: '',
  blogPost: '',
  counter: 0,
}

const vendorReducer = (state = initialState, action) => {
  let display;
  switch (action.type) {

case types.UPDATE_ITEM_DETAILS: {
  console.log('updating the items');
  let { vendorItems, productPrice, counter} = state;
  switch (action.payload.className) {
    case "vendorItems": {
      console.log('updating the item');
      let index = Number(action.payload.id);
      vendorItems[index] = action.payload.value
      console.log(vendorItems[action.payload.id] );
      counter+=1;
      return {
        ...state,
        vendorItems: vendorItems,
        counter: counter
      }


      // vendorItems[action.payload.id] = action.payload.value
      // console.log(vendorItems[action.payload.id] );
      // return {
      //   ...state,
      //   vendorItems: vendorItems
      // }
    }
    case "productPrice": {
      console.log('updating the price');
      let index = Number(action.payload.id);
      productPrice[index] = action.payload.value
      console.log(productPrice[action.payload.id] );
      counter-=1;
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