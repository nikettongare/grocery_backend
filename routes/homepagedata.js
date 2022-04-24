const HOMEPAGE_CONTROLLER = require("../controllers/homepage");

exports.routesConfig = function (app) {
  app.get("/homepagedata", [HOMEPAGE_CONTROLLER.getdata]);
};
