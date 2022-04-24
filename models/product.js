const mongoose = require("../config/db_connection").mongoose;
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    thumbnail: { type: String },
    images: { type: [String], required: true },
    mrpAmount: { type: Number, required: true },
    ourAmount: { type: Number, required: true },
    brand: { type: String, required: true },
    isVeg: { type: Boolean, default: true },
    keywords: { type: [String], required: true },
    description: {
      type: [
        {
          key: { type: String },
          value: { type: String },
        },
      ],
      required: true,
    },
    information: {
      type: [
        {
          key: { type: String },
          value: { type: String },
        },
      ],
      required: true,
    },
    feature: { type: [String], required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", productSchema);
