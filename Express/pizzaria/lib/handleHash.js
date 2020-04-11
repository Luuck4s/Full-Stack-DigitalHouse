const crypto = require("crypto");

const generateHash = (pass) => {
  return crypto.createHash("sha256").update(pass).digest("hex");
};

const compareHash = (passOriginal, pass) => {
  pass = generateHash(pass);

  return passOriginal === pass;
};

module.exports = {
  generateHash,
  compareHash,
};
