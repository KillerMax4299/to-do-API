const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const pool = new Pool({
  host: PGHOST,
  user: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  database: PGDATABASE,
  ssl: {
    rejectUnauthorized: true, // Enable SSL and reject unauthorized certificates
  },
});

module.exports = {
  pool,
};
