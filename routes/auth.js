const express = require("express");
const router = express.Router();
const oracledb = require("oracledb");
const dbConfig = require("../config/db");

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(
      `SELECT * FROM SIT_USER WHERE EMAIL = :email AND PASSWORD = SIT_UTILS_PKG.ENCRYPT_PASSWORD(:password)`,
      {
        email,
        password,
      },
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    );
    await connection.close();
    if (result.rows.length > 0) {
      req.session.user = {
        name: result.rows[0].NAME,
        email: result.rows[0].EMAIL,
      };
      res.json(
        "name: " + result.rows[0].NAME + " email: " + result.rows[0].EMAIL
      );
    } else {
      res.json('{"error": "Invalid email or password"}');
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});

module.exports = router;
