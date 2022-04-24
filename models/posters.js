const mongoose = require("../config/db_connection").mongoose;
const Schema = mongoose.Schema;

const postersSchema = new Schema(
  {
    thumbnail: {
      type: String,
      required: true,
    },
    keywords: { type: [String], required: true },
    height: { type: Number, max: 300, min: 150, required: true },
    type: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Posters", postersSchema);
