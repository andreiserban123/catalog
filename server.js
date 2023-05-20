const express = require("express");
require("dotenv").config();
const session = require("express-session");
const port = process.env.PORT || 5000;
const app = express();
const cors = require("cors");
const db = require("./config/db");

//Body parser middleware

//starting the db
db.createPool();

app.use(express.json());

app.use(
  session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5000",
      "http://127.0.0.1:5000",
      "http://127.0.0.1:5173",
    ],
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: false }));

const authRouter = require("./routes/auth");
app.use("/api/auth", authRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
