const { pool } = require("./database");
const { createToken } = require("./auth");

async function getall() {
  const client = await pool.connect();
  const result = await client.query("SELECT * FROM new_table;");
  client.end();
  return result.rows;
}

async function register({ username, password }) {
  const client = await pool.connect();
  await client.query({
    text: "INSERT INTO new_table(username,password) VALUES ( $1 , $2 );",
    values: [username, password],
  });
  client.end();
  return true;
}

async function username(data) {
  const client = await pool.connect();
  const result = await client.query({
    text: "SELECT username FROM new_table WHERE username = $1",
    values: [data],
  });
  client.end();
  return !result.rowCount;
}

const login = async ({ username, password }) => {
  const client = await pool.connect();
  const { rows, rowCount } = await client.query({
    text: "SELECT user_id FROM new_table WHERE username = $1 AND password = $2",
    values: [username, password],
  });
  client.end();
  if (rowCount) return createToken(rows[0].user_id);
  else return false;
};

module.exports = {
  getall,
  register,
  username,
  login,
};
