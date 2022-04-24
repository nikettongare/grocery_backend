const mongoose = require("mongoose");

const options = {
  autoIndex: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectWithRetry = () => {
  mongoose
    .connect(process.env.DB_HOST, options)
    .then(() => {
      console.log("MongoDB is connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

connectWithRetry();

exports.mongoose = mongoose;
