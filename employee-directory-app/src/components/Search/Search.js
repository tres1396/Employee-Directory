import React from "react";
import "./style.css";

function Search() {
  return (
    <div>
      <div className="search">
      <div className="search-bar">
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Search"
        ></input>
      </div>
      </div>
    </div>
  );
}

export default Search;
