import React, { Component } from "react";
import Employees from "../Employee/Employees";
import API from "../../utils/API";
import "./style.css"


class Worker extends Component {
  state = {
    employees: [],
    search: "",
    sort: [],
    sorted: false,
  };

  componentDidMount() {
    this.getEmployee();
  }

  getEmployee = () => {
    API.getRandomEmployee().then((res) => {
      this.setState({ employees: res.data.results });
    });
  };

  // sortNames = () => {
  //   let { names, search } = this.state;
  //   let nameSort = names.filter((sorted) => {
  //     return sorted.name.first || sorted.name.last || sorted.email;
  //   });
  //   this.setState({ nameSort });
  // };

  // startSort = (event) => {
  //   this.setState({ search: event.target.value }, () => {
  //     this.sortNames();
  //     this.setState({ sorted: true });
  //   });
  // };

  render = () => {
    return (
      <div>
        {/* <div>{<SearchForm startSort={this.startSorting}/>}</div> */}

        <div>
          <table className="table table-striped table-bordered table-condensed">
            <thead className="thead">
              <tr className="centered">
                <th className="employee-image">Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>DOB</th>
              </tr>
            </thead>
            <tbody>
              {!this.setState.sorted
                ? this.state.employees.map((employee) => (
                    <Employees
                      key={employee.login.uuid}
                      firstName={employee.name.first}
                      lastName={employee.name.last}
                      phone={employee.phone}
                      email={employee.email}
                      picture={employee.picture.large}
                      dob={employee.dob.date}
                    />
                  ))
                : this.state.nameSort.map((employee) => (
                    <Employees
                      key={employee.login.uuid}
                      firstName={employee.name.first}
                      lastName={employee.name.last}
                      phone={employee.phone}
                      email={employee.email}
                      picture={employee.picture.large}
                      dob={employee.dob.date}
                    />
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
}

export default Worker;
