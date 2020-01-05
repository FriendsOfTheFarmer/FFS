import React from "react";
import VendorItems from "../components/VendorItems";

const VendorForm = props => {
  const vendorSubmit = e => {
    e.preventDefault(); //prevents reload of the page
    props.vendorItemToggle();
    props.submitVendor(); //our action to create to submit vendor data
  };
  //handle the items here 
  const handleItemSubmit = e => {

  }

  let vItems = []; // our display of items
  for (let i = 0; i < props.vendorItems.length; i += 1) {
    vItems.push(
      //rendering the items from our two arrays in the state
      <VendorItems
        key={i}
        componentID={i}
        vendorItems={props.vendorItems[i]}
        productPrice={props.productPrice[i]}
        productDetails={props.productDetails[i]}
        dateDetails={props.dateDetails[i]}
        updateItemDetails={props.updateItemDetails}
      />
    );
  }
  const handleAdd = () => {
    console.log("handle add");
    props.addItem(); //add two empty entries to the arrays, causing them populate the form list
  };

  return (
    <div className="vendorForm"><div className="topForm">
      <div className = "flexBreak"></div>
      <table id="tableNav" class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Vendor Name</th>
            <th scope="col">Bio/Info</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
      </table>
      <div className = "flexBreak"></div>
      <form id="vendorForm" onSubmit={vendorSubmit}>
      
        <input
          id="vendorName"
          type="text"
          placeholder="Type name here..."
          onChange={props.updateVendorDetails}
          value={props.vendorName}
        ></input> 
        <input
          id="bio"
          type="text"
          placeholder="Bio/Product info..."
          onChange={props.updateVendorDetails}
          value={props.blogPost}
        ></input>
        <input
          id="email"
          type="text"
          placeholder="Enter email..."
          onChange={props.updateVendorDetails}
          value={props.blogPost}
        ></input>
        <input
          id="phone"
          type="text"
          placeholder="Phone Number..."
          onChange={props.updateVendorDetails}
          value={props.vendorEmail}
        ></input>
        <input
          id="website"
          type="text"
          placeholder="Website URL here..."
          onChange={props.updateVendorDetails}
          value={props.vendorWebsite}
        ></input>
        {/* <input
          id="vendorPhone"
          type="text"
          placeholder="ie. 9038675309 "
          onChange={props.updateVendorDetails}
          value={props.vendorPhone}
        ></input> */}
              <div className = "flexBreak"></div>
         <input className="vendorSubmit" type="submit" value="Submit Vendor Data"></input>
         <div className = "flexBreak"></div>
      </form>
      </div>
        
      {props.vendorItemTog === true && ( //conditional rendering for the customer display, as toggled by the button
        <div>
          <table id="tableNav" class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Item Name</th>
            <th scope="col">Item Price</th>
            <th scope="col">Item Details</th>
            <th scope="col">Date of Sale</th>
            <th scope="col">Marketplace</th>
          </tr>
        </thead>
      </table>
          <form id="vendorInput" onSubmit={handleItemSubmit}>
            {vItems}
            <div className = "flexBreak"></div>
            <input
              className="itemSubmit"
              type="submit"
              value="Submit Item Data"
            ></input>
          </form>
          <button id="addButton" className="button" onClick={() => handleAdd()}>
            Add Item {props.count}{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default VendorForm;
