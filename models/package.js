const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const packageSchema = new Schema(
  {
    package: {
      type: String,
    },
    sq_ft_min: {
      type: Number,
    },
    sq_ft_max: {
      type: Number,
    },
    price: {
      type: Number,
    },
    duration: {
      type: Number
    },
    photographerId: {
      type: String,
      required: "Photographer ID is required"
    },
  });

const Package = mongoose.model("Package", packageSchema);

module.exports = Package;
