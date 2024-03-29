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

const createRandomString = () => {
  let randomString = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < characters.length; i++) {
    randomString += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomString;
};

const query = (sqlString, args) => {
  return new Promise((resolve, reject) => {
    db.query(sqlString, args, (err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

app.get("/stories", async (req, res) => {
  try {
    const stories = await new Promise((resolve, reject) => {
      db.query("SELECT * FROM stories", (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
    res.json(stories);
  } catch (err) {
    console.log(err);
    res.status(500).send("Trouble grabbbing stories");
  }
});

app.post("/signup", async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;

  await query(
    "INSERT INTO users (firstName, lastName, email, password) VALUES (?,?,?,?)",
    [firstName, lastName, email, password]
  );

  res.send("user added into db");
});

app.get("/signin", async (req, res) => {
  const email = req.query.email;
  const password = req.query.password;

  const [user] = await query(
    "SELECT * FROM users WHERE email=? and password=?",
    [email, password]
  );

  if (!user) {
    res.status(401).json({ error: "Incorrect Email or Password" });
    return;
  }

  const userToken = createRandomString();

  await query("INSERT INTO activeusers (userId, password) VALUES (?,?)", [
    user.id,
    userToken,
  ]);

  res.json({
    user,
    token: userToken,
  });
});

app.post("/deleteactive", async (req, res) => {
  const password = req.body.password;

  await query("DELETE FROM activeusers WHERE password=?", [password]);

  res.send("session deleted");
});

app.get("/currentuser", async (req, res) => {
  const password = req.query.password;

  const [user] = await query(
    "SELECT * FROM activeusers JOIN users ON activeusers.userid = users.id WHERE activeusers.password = ?",
    [password]
  );

  res.json(user);
});

app.listen(3001, () => {
  console.log("server is running");
});
