const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
 const PORT = process.env.PORT || 3001;
 const DB_HOST = process.env.DB_HOST || "localhost";
 const DB_USER = process.env.DB_USER || "root";
 const DB_PASSWORD = process.env.DB_PASSWORD || "Romaissa25";
 const DB_NAME = process.env.DB_NAME || "coursedatabase";
 const DB_PORT = process.env.DB_PORT || 3306;

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
const db = mysql.createConnection({
  user: DB_USER,
  host: DB_HOST,
  port: DB_PORT,
  password: DB_PASSWORD,
  database: DB_NAME,
});


// app.get("/result", async (req, res) => {
//   const [rows] = await db.query("SELECT * FROM courseevaluation");
//   res.json(rows);

// });
app.post("/api/insert", (req, res) => {
  const {
    instructor_name,
    module,
    an1,
    an2,
    an3,
    an4,
    an5,
    an6,
    an7,
    an8,
    an9,
    an10,
    an11,
    an12,
    an13,
    student_effort,
    student_work,
    message,
  } = req.body.formdata;

db.query(
  "INSERT INTO dataTable (instructor_name,module,an1,an2,an3,an4,an5,an6,an7,an8,an9,an10,an11,an12,an13,student_effort,student_work,message) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
  [
    instructor_name,
    module,
    an1,
    an2,
    an3,
    an4,
    an5,
    an6,
    an7,
    an8,
    an9,
    an10,
    an11,
    an12,
    an13,
    student_effort,
    student_work,
    message,
  ],
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("sucess");
    }
  }
);
  
});
app.listen(PORT, () => {
  console.log("port 3001");
});
