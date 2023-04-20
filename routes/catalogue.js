const express = require('express');
const router = express.Router();
const queryDatabase = require('../config/db');
const oracledb = require('oracledb');

router.get('/juds', async (req, res) => {
  try {
    const connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM SIT_JUD`);
    connection.close();
    res.json({ succes: true, data: result.rows });
  } catch (err) {
    console.error(err.message);
    throw err;
  }
});

router.get('/juds/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const connection = await oracledb.getConnection();
    const result = await connection.execute(
      `SELECT * FROM SIT_JUD WHERE ID = :id`,
      {
        id,
      }
    );
    connection.close();

    res.json({ succes: true, data: result.rows });
  } catch (err) {
    console.error(err.message);
    throw err;
  }
});

router.get('/user', async (req, res) => {
  try {
    const connection = await oracledb.getConnection();
    const result = await connection.execute(`SELECT * FROM SIT_USER`);
    connection.close();
    res.json({ succes: true, data: result.rows });
  } catch (err) {
    console.error(err.message);
    throw err;
  }
});

router.delete('/user/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const connection = await oracledb.getConnection();
    const result = await connection.execute(
      `DELETE FROM SIT_USER WHERE ID = :id`,
      {
        id,
      }
    );
    connection.commit();
    connection.close();
    res.json({ succes: true, data: result });
  } catch (err) {
    console.error(err.message);
    throw err;
  }
});

router.post('/user', async (req, res) => {
  try {
    const connection = await oracledb.getConnection();
    const { email, password } = req.body;
    const result = await connection.execute(
      `INSERT INTO SIT_USER (id, password, email, id_pers)
        VALUES (SIT_USER_SQ.nextval,SIT_UTILS_PKG.encrypt_password(:password), :email, 2) 
      `,
      { password, email }
    );
    connection.commit();
    connection.close();
    res.json({ succes: true, data: result });
  } catch (err) {
    console.error(err.message);
    res.json({ succes: false, result: err.message });
    throw err;
  }
});

module.exports = router;
