// This file establishes our connection to MySQL.
// First, we require the Node package "mysql" and save that in a variable.
var mysql = require("mysql");

// Here, we define the parameters for our connection to the database.
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgers_db"
});
}

// Here, we initialize our connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Lastly, we export the connection for our ORM to use.
module.exports = connection;