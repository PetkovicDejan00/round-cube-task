import cors from "cors";
import express from "express";
import mysql from "mysql";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Database123",
  database: "round-cube",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Connected to backend");
});

app.get("/messages", (req, res) => {
  const messages = "SELECT * FROM `round-cube`.messages";
  db.query(messages, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/messages", (req, res) => {
  const query = "INSERT INTO messages (`name`, `message`) VALUES (?)";
  const values = [req.body.name, req.body.message];

  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("connected to backend");
});
