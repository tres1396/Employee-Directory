import React from "react";
import Header from "./components/Header/Header";
import Employees from "./components/Employee/Employees";
import Worker from "./components/SortSearch/SortSearch"
function App() {
  return (
    <div>
      <Header />
      <Employees />
      <Worker />
    </div>
  )
}

export default App;
