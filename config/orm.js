// The "connection.js" file is required to access our MySQL database.
var connection = require("./connection.js");

// ORM stands for Object-Relational-Mapping.
// We will be able to call specific methods on the "orm" object to manage our MySQL database.
// Note the way each query is constructed locally with function arguments and a string variable.
// This will help prevent SQL injection attacks on our program.
var orm = {
  // The "selectAll" method will return everything from the "burgers" table.
  selectAll: function (table, callback) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },
  // The "insertOne" method will create a new record in the "burgers" table.
  insertOne: function (table, column, value, callback) {
    var queryString = "INSERT INTO ?? VALUES ?";
    connection.query(queryString, [table, column, value], function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },
  // The "updateOne" method will update a specified record in the "burgers" table.
  updateOne: function (table, value, condition, callback) {
    var queryString = "UPDATE ?? SET ?? WHERE ?? = ?";
    connection.query(queryString, [table, value, condition], function (err, result) {
      if (err) throw err;
      callback(result);
    });
  }
};

// Here, we export our "orm" object so the rest of our program can use it.
module.exports = orm;