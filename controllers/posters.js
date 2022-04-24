const Posters = require("../models/posters");

exports.createPosters = (req, res) => {
  const PAYLOAD = req.body;

  const posters = new Posters(PAYLOAD);

  return posters
    .save()
    .then((result) => {
      return res.send({
        success: true,
        msg: "Posters Created Succussefully!",
        data: result,
      });
    })
    .catch((err) => {
      return res.send({
        success: false,
        msg: "Unable To Create Posters!",
        data: err,
      });
    });
};
