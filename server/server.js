const express = require("express");
const cors = require("cors");
const nodemon = require("nodemon");
const mysql = require("mysql2");

const app = express();
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "ryanryan",
  database: "coinbase",
});
app.use(cors());
app.use(express.json());

app.post("/signup", async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "INSERT INTO users (firstName, lastName, email, password) VALUES (?,?,?,?)",
    [firstName, lastName, email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("new user added");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("server is running");
});
