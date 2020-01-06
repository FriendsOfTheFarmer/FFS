import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions.js";
import Customer from "../components/Customer";

const mapStateToProps = state => ({
  arrayOfMarkets: state.customer.arrayOfMarkets,
  vendorList: state.customer.vendorList,
  marketDisplayTog: state.customer.marketDisplayTog
});

const mapDispatchToProps = dispatch => ({
  marketDisplayToggle: () => dispatch(actions.marketDisplayToggle()),
});

class CustomerContainer extends Component {
  render(props) {
    return (
      <div>
        <h1>CustomerContainer</h1>
        <Customer
          arrayOfMarkets={this.props.arrayOfMarkets}
          vendorList={this.props.vendorList}
          marketDisplayToggle={this.props.marketDisplayToggle}
          marketDisplayTog={this.props.marketDisplayTog}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerContainer);
