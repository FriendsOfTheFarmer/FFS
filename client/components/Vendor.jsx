import React, { Component } from 'react';


class Vendor extends Component {
  render() {
    return (
      <div>
        <button className="buttonVendorInMarket"
          type="button"
          value={this.props.vendorName}
          >
          {this.props.vendorName}
        </button>
      </div>
    )
  }
}

export default Vendor;