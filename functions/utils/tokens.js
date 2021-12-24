const jwt = require("jsonwebtoken");

const getToken = (usuario) => {
  return jwt.sign({ id: usuario._id }, process.env.SECRET, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
};

const validToken = (token) => {
  try {
    const tokenDecoded = jwt.verify(token, process.env.SECRET);
    return tokenDecoded;
  } catch {
    return false;
  }
};

module.exports = { getToken, validToken };
