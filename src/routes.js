const express = require("express");
const router = express.Router();
const { getall, register, username, login } = require("./middleware");
const { getTodo, addTodo, removeTodo, updateTodo } = require("./crud");
const { verifyToken } = require("./auth");

router.get("/", function (req, res) {
  res.json({ status: 200, message: "APi Connected" });
});

router.get("/getall", async function (req, res) {
  const result = await getall();
  res.json(result);
});

router.get("/username/:input", async (req, res) => {
  res.json(await username(req.params.input));
});

router.post("/register", async function (req, res) {
  const result = await register(req.body);
  if (result) res.json({ status: 200, message: "Successfully registered" });
});

router.post("/login", async (req, res) => {
  const result = await login(req.body);
  res.json(result);
});

router.get("/json",middleware, async (req, res) => {
  if (req.decoded) res.json(await getTodo(req.decoded));
  else res.sendStatus(403);
});

router.post("/json",middleware, async (req, res) => {
  if(req.decoded) res.json(await addTodo(req.decoded, req.body));
  else res.sendStatus(403);
});

router.delete("/json",middleware, async (req, res) => {
  if(req.decoded) res.json(await removeTodo(req.decoded, req.body));
  else res.sendStatus(403)
});

router.patch("/json",middleware, async (req, res) => {
  if(req.decoded) res.json(await updateTodo(req.decoded, req.body));
  else res.sendStatus(403)
});

router.get("/test",middleware, async (req, res) => {

  res.json(req.decoded);
});

function middleware(req, res, next) {
  let data = req.headers.authorization.split(" ");
  req.decoded = verifyToken(data[data.length - 1]);
  next();
}

module.exports = router;
