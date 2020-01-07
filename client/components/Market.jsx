import React, { Component } from 'react';
import Vendor from './Vendor.jsx';


class Market extends Component {
  render() {

    const specificVendor = [];
    for (let i = 0; i < this.props.vendorList.length; i++) {
      specificVendor.push(
        <Vendor
          vendorName={this.props.vendorList[i]}
          key={i}
        />)
    }

    return (
      <div>
        {specificVendor}
      </div>
    )
  }
}


export default Market;