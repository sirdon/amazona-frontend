import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Button, InputGroup, FormControl } from "react-bootstrap";
function Header() {
  return (
    <div className="header">
      <h1 className="logo">Amazona</h1>
      <div className="search-bar">
        <InputGroup >
          <FormControl
            placeholder="Search"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append className="icon">
            <SearchIcon className="search-icon" />
          </InputGroup.Append>
        </InputGroup>
      </div>
    </div>
  );
}

export default Header;
