import React from "react";

const VendorItems = props => {
  return (
    <div>
      <input
        className="vendorItems"
        id={`vI ${props.componentID}`}
        type="text"
        onChange={props.updateItemDetails}
        value={props.vendorItems}
      ></input>
      <input
        className="productPrice"
        id={`pP ${props.componentID}`}
        type="text"
        onChange={props.updateItemDetails}
        value={props.productPrice}
      ></input>
      <input
        className="productDetails"
        id={`pD ${props.componentID}`}
        type="text"
        onChange={props.updateItemDetails}
        value={props.productDetails}
      ></input>
      <input
        className="dateDetails"
        id={`dD ${props.componentID}`}
        type="text"
        onChange={props.updateItemDetails}
        value={props.dateDetails}
      ></input>
    </div>
  );
};

export default VendorItems;
