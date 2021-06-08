import React from "react";
import "./style.css";

function Header() {
  return (
    <div>
      <header>
        <h1>Employee Directory</h1>
      </header>
      <div className="subheader">
        <p>Use the search bar to narrow down your results.</p>
      </div>
    </div>
  );
}

export default Header;
