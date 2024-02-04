const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

const createToken = (data) => {
  return jwt.sign({data}, secret, { expiresIn: '30 days'});
};

const verifyToken = (data) => {
  return jwt.verify(data, secret, (err, decoded) => {
    if (err) {
      return false;
    }
    return decoded.data
  });
};

module.exports = {
  createToken,
  verifyToken,
};
