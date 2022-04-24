const mongoose = require("../config/db_connection").mongoose;
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, min: 3, max: 50, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      match:
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },
    password: { type: String, required: true },
    thumbnail: { type: String, default: "" },
    address: {
      address: { type: String, default: "" },
      city: { type: String, default: "" },
      mobile: { type: Number },
      postalCode: { type: Number },
    },
    basket: [],
    orders: [],
    permissionLevel: { type: Number, default: 1 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", userSchema);
