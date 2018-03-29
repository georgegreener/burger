// This file will handle our data.
// First, we require "orm.js" and store it in a variable for easy access.
var orm = require("../config/orm.js");

// Here is our "burger" object.
// We will call the methods on the object to utilize our ORM.
var burger = {
  selectAll: function (callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },
  insertOne: function (column, value, callback) {
    orm.insertOne("burgers", column, value, function (res) {
      callback(res);
    });
  },
  updateOne: function (value, condition, callback) {
    orm.updateOne("burgers", value, condition, function (res) {
      callback(res);
    });
  }
};

module.exports = burger;