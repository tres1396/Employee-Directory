import axios from "axios";

let employees = {
  getRandomEmployees: function () {
    return axios.get("https://randomuser.me/api/?results=30&nat=us");
  },
};

export default employees;
