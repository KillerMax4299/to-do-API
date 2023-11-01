const express = require("express");
const router = express.Router();
const { getall, register, username, login } = require("./middleware");

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
  const result = await login(req.body)
  res.json(result)
})

module.exports = router;
