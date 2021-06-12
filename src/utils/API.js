/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

let test =  {
  getRandomEmployee: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  },
};

export default test;