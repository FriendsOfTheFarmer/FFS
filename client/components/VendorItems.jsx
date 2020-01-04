import React from 'react';

const VendorItems = (props) => {
  return (<div>
    <input
      className = "vendorItems"
      id= {`${props.componentID}`}
      type="text"
      onChange={props.updateItemDetails}
      value={props.vendorItems}>
    </input>
    <input
      className = "productPrice"
      id={`${props.componentID}`}
      type="text"
      onChange={props.updateItemDetails}
      value={props.productPrice}>
    </input>
  </div>)
}

export default VendorItems;