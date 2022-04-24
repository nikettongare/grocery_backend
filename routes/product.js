const PRODUCT_CONTROLLER = require("../controllers/product");

exports.routesConfig = function (app) {
  app.post("/product/create", [PRODUCT_CONTROLLER.createProduct]);
  app.get("/product/detail/:productId", [PRODUCT_CONTROLLER.getProduct]);
  app.post("/product/search", [PRODUCT_CONTROLLER.productsSearch]);
};
