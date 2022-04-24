const CryptoJS = require("crypto-js");

exports.decrypt = (password) => {
  var bytes = CryptoJS.AES.decrypt(password, process.env.ENCRIPTION_SECRET);
  return bytes.toString(CryptoJS.enc.Utf8);
};

exports.encrypt = (password) => {
  return CryptoJS.AES.encrypt(
    password,
    process.env.ENCRIPTION_SECRET
  ).toString();
};
