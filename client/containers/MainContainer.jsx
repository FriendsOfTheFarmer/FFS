import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions.js";
import VendorForm from "../components/VendorForm";
import CustomerContainer from "./CustomerContainer";

const mapStateToProps = state => ({
  //toggles for rendering
  //BE SURE NOT TO WRITE A PROP THE SAME LABEL AS AN ACTION, THIS WILL OVERRIDE THE PROP NAME
  vendorDisplayTog: state.rendering.vendorDisplayTog,
  customerDisplayTog: state.rendering.customerDisplayTog,
  vendorItemTog: state.rendering.vendorItemTog,
  readyTog: state.rendering.readyTog,
  //vendor stuff
  vendorItems: state.vendor.vendorItems,
  productPrice: state.vendor.productPrice,
  productDetails: state.vendor.productDetails,
  dateDetails: state.vendor.dateDetails,
  itemLocation: state.vendor.itemLocation,
  vendorName: state.vendor.vendorName,
  vendorBio: state.vendor.vendorBio,
  vendorEmail: state.vendor.vendorEmail,
  vendorWebsite: state.vendor.vendorWebsite,
  vendorPhone: state.vendor.vendorPhone,
  //counter included to force a render
  counter: state.vendor.counter,

  // generic placeholder
  display: state.generic.display
});

const mapDispatchToProps = dispatch => ({
  //rendering actions
  vendorDisplayToggle: () => dispatch(actions.vendorDisplayToggle()),
  customerDisplayToggle: () => dispatch(actions.customerDisplayToggle()),
  vendorItemToggle: () => dispatch(actions.vendorItemToggle()),
  readyToggle: () => dispatch(actions.readyToggle()),
  //vendor actions
  updateVendorDetails: e => dispatch(actions.updateVendorDetails(e.target.value, e.target.id)),
  updateItemDetails: e => dispatch(actions.updateItemDetails(e.target.value, e.target.id, e.target.className)),
  addItem: () => dispatch(actions.addItem()),
  //vendor submit
  submitVendorDetails: () => dispatch(actions.submitVendorDetails()),
  submitItemDetails: () => dispatch(actions.submitItemDetails()),
  //generic action for placeholder
  anAction: () => dispatch(actions.anAction()),
  findAllMarketAsyncThunk: () => dispatch(actions.findAllMarketAsyncThunk())

});

class MainContainer extends Component {
  render(props) {
    return (
      <main>
        <div id="main" className="main-buttons">
          {/* we need to have a comma separating the functions in the onclick  */}
          <button id="customerDisplayButton" className="btn btn-primary btn-lg" type="button" onClick={() => { this.props.customerDisplayToggle(), this.props.findAllMarketAsyncThunk(); }}
          >
            Customer
            </button>
          <button id="vendorDisplayButton" className="btn btn-primary btn-lg" type="button" onClick={() => { this.props.vendorDisplayToggle(); }}>
            Vendor
            </button>
          {this.props.vendorDisplayTog === true && ( //conditional rendering for the vendor diplay, as toggled by the button
            <div id="vendorTable">
              <VendorForm
                vendorItemTog={this.props.vendorItemTog}
                vendorItemToggle={this.props.vendorItemToggle}

                //ready toggle for the submission of the bottom half of the form
                readyToggle={this.props.readyToggle}
                readyTog={this.props.readyTog}


                updateItemDetails={this.props.updateItemDetails}
                updateVendorDetails={this.props.updateVendorDetails}

                vendorItems={this.props.vendorItems}
                productPrice={this.props.productPrice}
                productDetails={this.props.productDetails}
                dateDetails={this.props.dateDetails}
                itemLocation={this.props.itemLocation}

                //vendor details(top of the form in the vendor component)
                vendorName={this.props.vendorName}
                vendorBio={this.props.vendorBio}
                vendorEmail={this.props.vendorEmail}
                vendorWebsite={this.props.vendorWebsite}
                vendorPhone={this.props.vendorPhone}

                //vendor item arrays (bottom of the form in the vendor component)
                addItem={this.props.addItem}
                submitVendorDetails={this.props.submitVendorDetails}
                submitItemDetails={this.props.submitItemDetails}
              />
            </div>
          )}
          {this.props.customerDisplayTog === true && ( //conditional rendering for the customer display, as toggled by the button
            <div>
              <CustomerContainer />
            </div>
          )}
        </div>
      </main >
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
