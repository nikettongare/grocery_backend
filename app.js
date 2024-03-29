const result = require("dotenv").config();
const cors = require("cors");

if (result.error) {
  console.log(result.error);
}

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
const userRouter = require("./routes/user");

const productRouter = require("./routes/product");
const categoriesRouter = require("./routes/categories");
const postersRouter = require("./routes/posters");
const homepagedataRouter = require("./routes/homepagedata");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const corsOptions = {
  credentials: true,
  origin: true,
  allowedHeaders:
      "Accept, Origin, X-Requested-With, x-auth-token, X-Auth-Token, Authorization, Content-Type, content-type, Cache-Control, Access-Control-Allow-Origin",
};

app.use(cors(corsOptions));


app.use("/", indexRouter);
userRouter.routesConfig(app);
productRouter.routesConfig(app);
categoriesRouter.routesConfig(app);
postersRouter.routesConfig(app);
homepagedataRouter.routesConfig(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
