const oracledb = require("oracledb");
require("dotenv").config();

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectString: process.env.DB_CONNECTION_STRING,
  poolMax: 10, // maximum size of the pool
  poolMin: 2, // minimum size of the pool
  poolIncrement: 2, // number of connections to create when the pool is exhausted
  poolTimeout: 100000, // maximum time in seconds that a connection can remain idle in the pool
};

async function createPool() {
  try {
    await oracledb.createPool(dbConfig);
    console.log("Connection pool created!");
  } catch (err) {
    console.error("Error creating connection pool:", err.message);
    throw err;
  }
}

// Export queryDatabase for use in other modules
module.exports = { createPool };
