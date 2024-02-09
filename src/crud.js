const { pool } = require("./database");

const getTodo = async (index) => {
  const client = await pool.connect();
  const { rows } = await client.query({
    text: "SELECT list FROM new_table WHERE user_id =$1",
    values: [index],
  });
  // console.log(result);
  client.end();
  return rows[0].list;
};

const addTodo = async (index, data, response) => {
  const client = await pool.connect();
  const { rowCount, command } = await client.query({
    text: "UPDATE new_table SET list = list || $1::jsonb WHERE user_id = $2",
    values: [data, index],
  });
  const { rows } = await client.query({
    text: "SELECT list FROM new_table WHERE user_id =$1",
    values: [index],
  });
  client.end();
  if(response) return rows[0].list 
  return { command, rowCount };
};

const removeTodo = async (index, data, response) => {
  const client = await pool.connect();
  const { rowCount, command } = await client.query({
    text: "UPDATE new_table SET list = array_remove(list, $1::jsonb) WHERE user_id = $2",
    values: [data, index],
  });
  const { rows } = await client.query({
    text: "SELECT list FROM new_table WHERE user_id =$1",
    values: [index],
  });
  client.end();
  if (response) return rows[0].list;
  return { command, rowCount };
};

const updateTodo = async (key, data, response) => {
  const { index, id, name } = data;
  const client = await pool.connect();
  const { rowCount, command } = await client.query({
    text: `UPDATE new_table SET list[$1] = $2 WHERE user_id = $3`,
    values: [index + 1, { id: id, name: name }, key],
  });
  const { rows } = await client.query({
    text: "SELECT list FROM new_table WHERE user_id =$1",
    values: [key],
  });
  client.end();
  if (response) return rows[0].list
  return { command, rowCount };
};

module.exports = {
  getTodo,
  addTodo,
  removeTodo,
  updateTodo,
};
