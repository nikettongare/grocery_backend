const mongoose = require("../config/db_connection").mongoose;
const Schema = mongoose.Schema;

const categoriesSchema = new Schema(
  {
    title: { type: String, required: true },
    thumbnail: {
      type: String,
      required: true,
    },
    keywords: { type: [String], required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Categories", categoriesSchema);
