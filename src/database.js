const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const pool = new Pool({
  host: "192.168.29.186",
  user: "postgres",
  password: "root",
  port: 5432,
  database: "postgres",
  
});

module.exports = {
  pool
}
