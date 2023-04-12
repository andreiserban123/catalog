const oracledb = require('oracledb')

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectString: process.env.DB_CONNECTION_STRING,
}
async function getConnection() {
  try {
    let connection = await oracledb.getConnection(dbConfig)
    console.log('Connection was successful!')
    return connection
  } catch (err) {
    console.error(err.message)
    throw err
  }
}
module.exports = getConnection
