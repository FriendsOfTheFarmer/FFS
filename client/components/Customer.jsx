import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Market from "./Market";

class Customer extends Component {
  render(props) {
    const handleMarketClick = (name) => {
      console.log("clicked on the market item")
      this.props.marketDisplayToggle();
      this.props.findAllVendorsPerMarketAsyncThunk(name);
    }
    let dropdownItem = [];
    for (let i = 0; i < this.props.arrayOfMarkets.length; i++) {
      dropdownItem.push(

        <Dropdown.Item key={i}
          onClick={() => handleMarketClick(this.props.arrayOfMarkets[i])}>
          {this.props.arrayOfMarkets[i]}
        </Dropdown.Item>
      );
    }
    return (
      <div className="dropdownButton">
        <DropdownButton
          id="MarketsDropdown"
          title="Farmer's Markets"
          size="lg"
          className="dropdownButton"
        >
          {dropdownItem}
        </DropdownButton>

        {this.props.marketDisplayTog === true && (
          <div>
            <Market
              vendorList={this.props.vendorList}
              findAllVendorsPerMarketAsyncThunk={this.props.findAllVendorsPerMarketAsyncThunk} />
          </div>
        )}
      </div>
    );
  }
}

export default Customer;
