const Product = require("../models/product");

exports.createProduct = (req, res) => {
  const PAYLOAD = req.body;
  PAYLOAD.thumbnail = PAYLOAD.images[0];

  Product.find({ title: PAYLOAD.title })
    .exec()
    .then((resuser) => {
      if (resuser.length) {
        throw `Product With Title:('${PAYLOAD.title}') Already Exist!`;
      }

      const product = new Product(PAYLOAD);
      product.save().then((result) => {
        return res.send({
          success: true,
          msg: "Product Created Succussefully!",
          data: result,
        });
      });
    })
    .catch((err) => {
      return res.send({
        success: false,
        msg: "Unable To Create Product!",
        data: err,
      });
    });
};

exports.productsSearch = (req, res) => {
  const PAYLOAD = req.body;

  Product.find({
    $or: [{ title: { $regex: PAYLOAD.keywords, $options: "i" } }],
  })
    .exec()
    .then((resuser) => {
      if (!resuser.length) {
        throw `No Product Found!`;
      }

      return res.send({
        success: true,
        msg: "Product List Fetch Succussefully!",
        data: resuser,
      });
    })
    .catch((err) => {
      return res.send({
        success: false,
        msg: "Unable To Fetch Product List!",
        data: err,
      });
    });
};

exports.getProduct = (req, res) => {
  Product.find({
    _id: req.params.productId,
  })
    .exec()
    .then((resuser) => {
      if (!resuser.length) {
        throw `No Product Found!`;
      }

      return res.send({
        success: true,
        msg: "Product Detail Found!",
        data: resuser,
      });
    })
    .catch((err) => {
      return res.send({
        success: false,
        msg: "Unable To Get Product Detail!",
        data: err,
      });
    });
};
