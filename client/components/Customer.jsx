import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Market from "./Market";

class Customer extends Component {
  render(props) {
    let dropdownItem = [];
    for (let i = 0; i < this.props.arrayOfMarkets.length; i++) {
      dropdownItem.push(
        <Dropdown.Item key={i} onClick={() => this.props.marketDisplayToggle()}>
          {this.props.arrayOfMarkets[i]}
        </Dropdown.Item>
      );
    }
    return (
      <div>
        <DropdownButton
          id="Markets Dropdown"
          title="Farmer's Markets"
          size="lg"
        >
          {dropdownItem}
        </DropdownButton>

        {this.props.marketDisplayTog === true && (
          <div>
            <Market vendorList={this.props.vendorList} />
          </div>
        )}
      </div>
    );
  }
}

export default Customer;
