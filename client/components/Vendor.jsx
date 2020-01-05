import React, { Component } from 'react';


class Vendor extends Component {
  render() {
    return (
      <div>
        {this.props.vendorName}
      </div>
    )
  }
}

export default Vendor;