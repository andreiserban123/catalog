const express = require('express')
const router = express.Router()
const queryDatabase = require('../config/db')
const oracledb = require('oracledb')

router.get('/juds', async (req, res) => {
  try {
    const connection = await oracledb.getConnection()
    const result = await connection.execute(`SELECT * FROM SIT_JUD`)
    res.json({ succes: true, data: result.rows })
  } catch (err) {
    console.error(err.message)
    throw err
  }
})

router.get('/juds/:id', async (req, res) => {
  try {
    const id = req.params.id
    const connection = await oracledb.getConnection()
    const result = await connection.execute(
      `SELECT * FROM SIT_JUD WHERE ID = :id`,
      {
        id,
      }
    )
    res.json({ succes: true, data: result.rows })
  } catch (err) {
    console.error(err.message)
    throw err
  }
})

router.post('/user', async (req, res) => {
  try {
    const connection = await oracledb.getConnection()
    const { name, password, email } = req.body
    const result = await connection.execute(
      `INSERT INTO SIT_USER (id, NAME, password, email, id_pers)
       VALUES (2, :name, :password, :email, 1) 
      `,
      { name, password, email }
    )
    connection.commit()
    res.json({ succes: true, data: result })
  } catch (err) {
    console.error(err.message)
    res.json({ succes: false, result: err.message })
    throw err
  }
})

module.exports = router
