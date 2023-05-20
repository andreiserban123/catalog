const express = require("express");
const router = express.Router();
const oracledb = require("oracledb");

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const connection = await oracledb.getConnection();
    const result = await connection.execute(
      `SELECT * FROM SIT_USER WHERE EMAIL = :email AND PASSWORD = SIT_UTILS_PKG.ENCRYPT_PASSWORD(:password)`,
      {
        email,
        password,
      },
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    );
    const id = result.rows[0].ID;
    const result2 = await connection.execute(
      `select ID_ROLE from SIT_USER_ROLES where ID_USER = :id`,
      {
        id,
      }
    );
    const role = result2.rows[0].ID_ROLE;

    await connection.close();
    if (result.rows.length > 0) {
      req.session.user = {
        name: result.rows[0].NAME,
        email: result.rows[0].EMAIL,
      };
      res.json(`"status": "success", "email": "${result.rows[0].EMAIL}"`);
    } else {
      res.json('{"error": "Invalid email or password"}');
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});

router.get("/login", async (req, res) => {
  try {
    const connection = await oracledb.getConnection();
    const result = await connection.execute("SELECT * FROM SIT_USER");
    await connection.close();
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});

module.exports = router;
