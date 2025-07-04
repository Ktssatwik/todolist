// const mysql = require("mysql2/promise");

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Bablu@1103", // set your password if needed
//   database: "todolist", // make sure this DB exists in MySQL
// });

// db.connect((err) => {
//   if (err) {
//     console.error("MySQL Connection Failed:", err);
//     return;
//   }
//   console.log("Connected to MySQL Database");
// });


const mysql = require('mysql2/promise'); // ⚠️ Must be mysql2/promise

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Bablu@1103", // set your password if needed
  database: "todolist", // make sure this DB exists in MySQL
});

module.exports = db;

