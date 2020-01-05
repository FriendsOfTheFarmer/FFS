import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import AComponent from '../components/AComponent';
import VendorForm from '../components/VendorForm';
import CustomerContainer from './CustomerContainer';



const mapStateToProps = (state) => ({
  //toggles for rendering
  //BE SURE NOT TO WRITE A PROP THE SAME LABEL AS AN ACTION, THIS WILL OVERRIDE THE PROP NAME
  vendorDisplayTog: state.rendering.vendorDisplayTog,
  customerDisplayTog: state.rendering.customerDisplayTog,

  //vendor stuff
  vendorItems: state.vendor.vendorItems,
  productPrice: state.vendor.productPrice,
  productDetails: state.vendor.productDetails,
  vendorName: state.vendor.vendorName,
  marketName: state.vendor.marketName,
  blogPost: state.vendor.blogPost,
  vendorEmail: state.vendor.vendorEmail,
  vendorWebsite: state.vendor.vendorWebsite,
  vendorPhone: state.vendor.vendorPhone,
  //counter included to force a render
  counter: state.vendor.counter,

  // generic placeholder
  display: state.generic.display,
});

const mapDispatchToProps = (dispatch) => ({
  //rendering actions
  vendorDisplayToggle: () => dispatch(actions.vendorDisplayToggle()),
  customerDisplayToggle: () => dispatch(actions.customerDisplayToggle()),

  //vendor actions
  updateVendorDetails: (e) => dispatch(actions.updateVendorDetails(e.target.value, e.target.id)),
  updateItemDetails: (e) => dispatch(actions.updateItemDetails(e.target.value, e.target.id, e.target.className)),
  addItem: () => dispatch(actions.addItem()),
  submitVendor: () => dispatch(actions.submitVendor()),

  //generic action for placeholder
  anAction: () => dispatch(actions.anAction()),

});

class MainContainer extends Component {
  render(props) {
    return (
      <main>
        <div>
          <button id='vendorDisplay' type='button' onClick={() => { this.props.vendorDisplayToggle() }}>Go to Vendor Form</button>
          <button id='customerDisplay' type='button' onClick={() => { this.props.customerDisplayToggle() }}>Go to Customer Display</button>
          {this.props.vendorDisplayTog === true && //conditional rendering for the vendor diplay, as toggled by the button
            <div>
              <VendorForm
                updateItemDetails={this.props.updateItemDetails}
                updateVendorDetails={this.props.updateVendorDetails}

                vendorItems={this.props.vendorItems}
                productPrice={this.props.productPrice}
                productDetails={this.props.productDetails}
                vendorName={this.props.vendorName}
                marketName={this.props.marketName}
                blogPost={this.props.blogPost}
                vendorEmail={this.props.vendorEmail}
                vendorWebsite={this.props.vendorWebsite}
                vendorPhone={this.props.vendorPhone}

                addItem={this.props.addItem}
                submitVendor={this.props.submitVendor}
              />
            </div>}
          {this.props.customerDisplayTog === true && //conditional rendering for the customer display, as toggled by the button
            <div>
              <CustomerContainer />

            </div>}
        </div>
      </main>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);