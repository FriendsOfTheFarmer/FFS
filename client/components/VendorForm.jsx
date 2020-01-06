import React from "react";
import VendorItems from "../components/VendorItems";

const VendorForm = props => {
  const vendorSubmit = e => {
    console.log("handleItemSubmit")
    e.preventDefault(); //prevents reload of the page
    props.vendorItemToggle();
    props.submitVendorDetails(); //our action to create to submit vendor data
  };
  //handle the items here 
  const handleItemSubmit = e => {
    console.log("handleItemSubmit")
    e.preventDefault();
    if (props.readyTog === true) {
      console.log("READY TO GO!!!")
      props.submitItemDetails()
      // hanndle submit to reducer
      console.log(e);
      // e.submitButton.disabled = true;
    }
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
        itemLocation={props.itemLocation[i]}
        updateItemDetails={props.updateItemDetails}
      />
    );
  }
  const handleAdd = () => {
    console.log("handle add");
    props.addItem(); //add two empty entries to the arrays, causing them populate the form list
  };

  return (
    <div className="vendorForm">
      <div className="topForm">
        <div className="flexBreak"></div>
        <table id="tableNav" className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Vendor Name</th>
              <th scope="col">Bio/Info</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Website</th>
            </tr>
          </thead>
        </table>
        <div className="flexBreak"></div>
        <form id="vendorForm" onSubmit={vendorSubmit}>
          <input
            id="vendorName"
            type="text"
            placeholder="Type name here..."
            onChange={props.updateVendorDetails}
            value={props.vendorName}
          ></input>
          <input
            id="vendorBio"
            type="text"
            placeholder="Bio/Product info..."
            onChange={props.updateVendorDetails}
            value={props.vendorBio}
          ></input>
          <input
            id="vendorEmail"
            type="text"
            placeholder="Enter your email..."
            onChange={props.updateVendorDetails}
            value={props.vendorEmail}
          ></input>
          <input
            id="vendorPhone"
            type="text"
            placeholder="Phone Number..."
            onChange={props.updateVendorDetails}
            value={props.vendorPhone}
          ></input>
          <input
            id="vendorWebsite"
            type="text"
            placeholder="Your website URL here..."
            onChange={props.updateVendorDetails}
            value={props.vendorWebsite}
          ></input>
          <div className="flexBreak"></div>
          <input className="vendorSubmit" type="submit" value="Submit Vendor Data"></input>
          <div className="flexBreak"></div>
        </form>
      </div>

      {props.vendorItemTog === true && ( //conditional rendering for the customer display, as toggled by the button
        <div className = "bottomForm">
          
          <table id="tableNav" className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Item Name</th>
                <th scope="col">Item Price</th>
                <th scope="col">Item Details</th>
                <th scope="col">Date of Sale</th>
                <th scope="col">Marketplace</th>
              </tr>
            </thead>
          </table>
          <div className="flexBreak"></div>
          <form id="itemForm" onSubmit={(e) => handleItemSubmit(e)}>
            {vItems}
            <div className="flexBreak"></div>
            <button id="addButton" className="button" onClick={() => handleAdd()}>Add Item {props.count}{" "}</button>
            <button id="readyButton" className="button" onClick={() => props.readyToggle()}>All Good? {props.count}{" "}</button>
            <div className="flexBreak"></div>
            {props.readyTog === true &&
              <input className="itemSubmit" type="submit" disabled={true} value="Data Submitted!!!!"></input>
            }            
          </form>
        </div>
      )}
    </div>
  );
};

export default VendorForm;
