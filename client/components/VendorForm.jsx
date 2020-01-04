import React from 'react';
import VendorItems from '../components/VendorItems';

const VendorForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();  //prevents reload of the page
    props.submitVendor(); //our action to create to submit vendor data
  }
  let vItems = [];// our display of items
  for (let i = 0; i < props.vendorItems.length; i += 1) {
    vItems.push(  //rendering the items from our two arrays in the state
    <VendorItems
      key={i}
      componentID = {i}
      vendorItems={props.vendorItems[i]}
      productPrice={props.productPrice[i]}
      productDetails={props.productDetails[i]}
      updateItemDetails={props.updateItemDetails}
    />);
  }
  const handleAdd = () => {
    console.log('handle add');
    props.addItem(); //add two empty entries to the arrays, causing them populate the form list
  }

  return (
    <div className="vendorForm">
      <button className="button" onClick={() => handleAdd()}>Add Item {props.count} </button>
      <form onSubmit={handleSubmit}>
        <input
          id="vendorName"
          type="text"
          placeholder="Vendor Name"
          onChange={props.updateVendorDetails}
          value={props.vendorName}>
        </input>
        <input
          id="marketName"
          type="text"
          placeholder="Market Name"
          onChange={props.updateVendorDetails}
          value={props.marketName}>
        </input>
        <input
          id="blogPost"
          type="text"
          placeholder="ie. WE HAVE FRESH PINEAPPLES TODAY ON SPECIAL!"
          onChange={props.updateVendorDetails}
          value={props.blogPost}>
        </input>
        <input
          id="vendorEmail"
          type="text"
          placeholder="ie. dudeAbides@juno.com"
          onChange={props.updateVendorDetails}
          value={props.vendorEmail}>
        </input>
        <input
          id="vendorWebsite"
          type="text"
          placeholder="ie. www.iLikeCats.com"
          onChange={props.updateVendorDetails}
          value={props.vendorWebsite}>
        </input>
        <input
          id="vendorPhone"
          type="text"
          placeholder="ie. 9038675309 "
          onChange={props.updateVendorDetails}
          value={props.vendorPhone}>
        </input>
        {vItems}
        <input className="VendorSubmit" type="submit" value="Submit Vendor Data"></input>
      </form>
    </div>
  )
}


export default VendorForm;