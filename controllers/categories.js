const Categories = require("../models/categories");

exports.createCategories = (req, res) => {
  const PAYLOAD = req.body;

  Categories.find({ title: PAYLOAD.title })
    .exec()
    .then((resuser) => {
      if (resuser.length) {
        throw `Categories With Title:('${PAYLOAD.title}') Already Exist!`;
      }

      const categories = new Categories(PAYLOAD);
      return categories
        .save()
        .then((result) => {
          return res.send({
            success: true,
            msg: "Categories Created Succussefully!",
            data: result,
          });
        })
        .catch((error) => {
          throw error;
        });
    })
    .catch((err) => {
      return res.send({
        success: false,
        msg: "Unable To Create Categories!",
        data: err,
      });
    });
};

exports.listallCategories = (req, res) => {
  Categories.find({}, "title thumbnail keywords")
    .exec()
    .then((resCat) => {
      if (!resCat.length) {
        throw `Categories list empty!`;
      }

      return res.send({
        success: true,
        msg: "Categories List Found!",
        data: resCat,
      });
    })
    .catch((err) => {
      return res.send({
        success: false,
        msg: "Unable To Get Categories!",
        data: err,
      });
    });
};
