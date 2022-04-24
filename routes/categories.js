const CATEGORIES_CONTROLLER = require("../controllers/categories");

exports.routesConfig = function (app) {
  app.post("/categories/create", [CATEGORIES_CONTROLLER.createCategories]);
  app.get("/categories/all", [CATEGORIES_CONTROLLER.listallCategories]);
};
