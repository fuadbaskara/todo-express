const axios = require("axios");
const URL = "http://localhost:3000";

//get ALL
const getAll = () => {
  return axios
    .get(`${URL}/todo`)
    .then(rawResponse => {
      console.log("-------------------------------------------");
      console.log("get All");
      console.log(rawResponse.data);
    })
    .catch(function(error) {
      console.log(error);
    });
};

//get One
const getOne = () => {
  return axios
    .get(`${URL}/todo/1`)
    .then(rawResponse => {
      console.log("-------------------------------------------");
      console.log("get One");
      console.log(rawResponse.data);
    })
    .catch(function(error) {
      console.log(error);
    });
};

//Create new todo
const createNew = () => {
  return axios
    .post(`${URL}/todo`, {
      todo: "New Todo",
      done: false
    })
    .then(function(rawResponse) {
      console.log("-------------------------------------------");
      console.log("Create new todo");
      console.log(rawResponse.data);
    })
    .catch(function(error) {
      console.log(error);
    });
};

getAll();
getOne();
createNew();
createNew();
getAll();
getOne();
