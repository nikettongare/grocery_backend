const USER_CONTROLLER = require("../controllers/user");

exports.routesConfig = function (app) {
  app.post("/user/create", [USER_CONTROLLER.createUser]);
  app.post("/user/login", [USER_CONTROLLER.userLogin]);
  app.post("/user/update/:userId", [USER_CONTROLLER.updateUser]);
};
