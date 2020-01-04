import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import AComponent from '../components/AComponent';
import VendorForm from '../components/VendorForm';

const mapStateToProps = (state) => ({
  //toggles for rendering
  display: state.generic.display,
  vendorItems: state.vendor.vendorItems,
  marketName: state.vendor.marketName,
  blogPost: state.vendor.blogPost,
  vendorName: state.vendor.vendorName,
  productPrice: state.vendor.productPrice,
  counter: state.vendor.counter
});

const mapDispatchToProps = (dispatch) => ({
  anAction: () => dispatch(actions.anAction()),
  updateVendorDetails: (e) => dispatch(actions.updateVendorDetails(e.target.value, e.target.id)),
  updateItemDetails: (e) => dispatch(actions.updateItemDetails(e.target.value, e.target.id, e.target.className)),
  addItem: () => dispatch(actions.addItem()),
});

class MainContainer extends Component {
  render(props) {
    return(
      <main>
       <div>
         <AComponent 
         display={this.props.display}   
         anAction={this.props.anAction}
         />
         <VendorForm
         updateItemDetails={this.props.updateItemDetails}
         updateVendorDetails={this.props.updateVendorDetails}
         vendorItems={this.props.vendorItems}
         marketName={this.props.marketName}
         blogPost={this.props.blogPost}
         counter={this.props.counter}
         vendorName={this.props.vendorName}
         productPrice={this.props.productPrice}
         addItem={this.props.addItem}
         />
       </div>

      </main>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);