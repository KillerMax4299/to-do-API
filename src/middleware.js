const { pool } = require("./database");

async function getall() {
  const client = await pool.connect();
  const result = await client.query("SELECT * FROM todolist2;");
  client.end();
  return result.rows;
}

async function register({ username, password }) {
  const client = await pool.connect();
  await client.query({
    text: "INSERT INTO todolist2(username,password) VALUES ( $1 , $2 );",
    values: [username, password],
  });
  client.end();
  return true;
}

async function username(data) {
  const client = await pool.connect();
  const result = await client.query({
    text: "SELECT username FROM todolist2 WHERE username = $1",
    values: [data],
  });
  console.log(result);
  client.end();
  return !result.rowCount;
}

const login = async ({ username, password }) => {
  const client = await pool.connect();

  const { rows, rowCount } = await client.query({
    text: "SELECT user_id, pending_list, completed_list FROM todolist2 WHERE username = $1 AND password = $2",
    values: [username, password],
  });
  client.end();
  if (rowCount) return rows[0];
  else return false;
};

module.exports = {
  getall,
  register,
  username,
  login,
};
