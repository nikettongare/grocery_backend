const Posters = require("../models/posters");
const Product = require("../models/product");
const Categories = require("../models/categories");

exports.getdata = (req, res) => {
  const homepagedata = {
    products: [],
    posters: [],
    categories: [],
  };

  Product.find(
    {},
    {
      timestamps: false,
    }
  )
    .sort({ updatedAt: -1 })
    .then((resProducts) => {
      if (!resProducts) {
        throw "No Product Found!";
      }

      homepagedata.products = resProducts;

      return Posters.find(
        {},
        {
          timestamps: false,
        }
      )
        .sort({ updatedAt: -1 })
        .then((resProducts) => {
          if (!resProducts) {
            throw "No Poster Found!";
          }

          homepagedata.posters = resProducts;

          return Categories.find(
            {},
            {
              timestamps: false,
            }
          )
            .sort({ updatedAt: -1 })
            .then((resCategories) => {
              if (!resCategories) {
                throw "No Categories Found!";
              }

              homepagedata.categories = resCategories;

              return res.send({
                success: true,
                msg: "HomePageData Found!",
                data: homepagedata,
              });
            })
            .catch((err) => {
              return res.send({
                success: false,
                msg: "Unable To Get Categories!",
                data: err,
              });
            });
        })
        .catch((err) => {
          return res.send({
            success: false,
            msg: "Unable To Get Posters!",
            data: err,
          });
        });
    })
    .catch((err) => {
      return res.send({
        success: false,
        msg: "Unable To Get Product!",
        data: err,
      });
    });
};
