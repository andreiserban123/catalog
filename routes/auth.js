const express = require('express');
const router = express.Router();
const queryDatabase = require('../config/db');
const oracledb = require('oracledb');

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const connection = await oracledb.getConnection();
    const result = await connection.execute(
      `SELECT * FROM SIT_USER WHERE EMAIL = :email AND PASSWORD = SIT_UTILS_PKG.ENCRYPT_PASSWORD(:password)`,
      {
        email,
        password,
      }
    );
    console.log(result.rows.length);
    connection.close();
    if (result.rows.length > 0) {
      res.json('Login Success');
    } else {
      res.redirect('/login');
    }
  } catch (err) {
    console.error(err.message);
    throw err;
  }
});

module.exports = router;
