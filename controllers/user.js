const AES = require("../helper/aes_crypto");
const User = require("../models/user");

exports.createUser = (req, res) => {
  const PAYLOAD = req.body;

  User.find({ email: PAYLOAD.email })
    .exec()
    .then((resuser) => {
      if (resuser.length) {
        throw `User With Email:('${PAYLOAD.email}') Already Exist!`;
      }

      PAYLOAD.password = AES.encrypt(PAYLOAD.password);

      const user = new User(PAYLOAD);
      user.save().then((result) => {
        return res.send({
          success: true,
          msg: "User Created Succussefully!",
          data: result,
        });
      });
    })
    .catch((err) => {
      return res.send({
        success: false,
        msg: "Unable To Create User!",
        data: err,
      });
    });
};

exports.userLogin = (req, res) => {
  const PAYLOAD = req.body;

  User.findOne({ email: PAYLOAD.email })
    .exec()
    .then((user) => {
      if (!user) {
        throw `User With Email:('${PAYLOAD.email}') Not Found!`;
      }

      if (AES.decrypt(user.password) !== PAYLOAD.password) {
        throw `Password For ('${PAYLOAD.email}') Is Incorrect!`;
      }

      return res.send({
        success: true,
        msg: "User Successfully Logged In!",
        data: user,
      });
    })
    .catch((errer) => {
      console.log(errer);
      return res.send({
        success: false,
        msg: "Unable To Login!",
        data: errer,
      });
    });
};

exports.updateUser = (req, res) => {
  const PAYLOAD = req.body;

  User.findByIdAndUpdate(req.params.userId, PAYLOAD, {
    new: true,
  })
    .then((result) => {
      if (result) {
        return res.send({
          success: true,
          msg: "user data updated",
          data: result,
        });
      } else {
        return res.send({
          success: false,
          msg: "fail to update user data",
          data: result,
        });
      }
    })
    .catch((err) => {
      return res.send({
        success: false,
        msg: "fail to update user data",
        data: err,
      });
    });
};
