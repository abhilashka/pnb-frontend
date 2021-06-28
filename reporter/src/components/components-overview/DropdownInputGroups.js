import React from "react";
import {
  InputGroup,
  FormInput,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "shards-react";


class DropdownInputGroups extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      dropdown1: false,
      dropdown2: false
    };
  }

  toggle(which) {
    const newState = { ...this.state };
    newState[which] = !this.state[which];
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <InputGroup className="mb-3" >
          <Dropdown
            open={this.state.dropdown1}
            toggle={() => this.toggle("dropdown1")}
            addonType="append"
          >
            <DropdownToggle caret>Select Category</DropdownToggle>
            <DropdownMenu small >
              <DropdownItem>Business</DropdownItem>
              <DropdownItem>Cars</DropdownItem>
              <DropdownItem> Entertainment</DropdownItem>
              <DropdownItem> Family</DropdownItem>
              <DropdownItem>Health </DropdownItem>
              <DropdownItem> Politics</DropdownItem>
              <DropdownItem> Religion</DropdownItem>
              <DropdownItem> Science</DropdownItem>
              <DropdownItem> Sports</DropdownItem>
              <DropdownItem> Travel</DropdownItem>
              <DropdownItem> Video</DropdownItem>
              <DropdownItem> World</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </InputGroup>


      </div>
    );
  }
}

export default DropdownInputGroups;
