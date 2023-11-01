const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const router = require("./src/routes");
app.use("", router);
app.listen(4000, console.log("API server is http://localhost:4000"));
