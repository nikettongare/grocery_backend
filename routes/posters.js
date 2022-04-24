const POSTERS_CONTROLLER = require("../controllers/posters");

exports.routesConfig = function (app) {
  app.post("/posters/create", [POSTERS_CONTROLLER.createPosters]);
};
