import React from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Table from "./components/Table/Table";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Header />
      <Search />
      <Table />
    </div>
  )
}

export default App;
