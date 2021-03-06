import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div className="full-header">
      <header>
        <h1>Employee Directory</h1>
      </header>
      <div className="subheader">
        <p>Use the search bar to narrow down your results.</p>
      </div>
      <div className="search-bar">
      { <input /*onChange={(event) => props.startSort(event)}*/ type="text" placeholder="Search" name="search"></input> }
      </div>
    </div>
  );
}

export default Header;
