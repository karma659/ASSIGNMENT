const mongoose = require("mongoose");

const oemSpecsSchema = mongoose.Schema(
   {
      model: {type: String, required: true},
      year: {type: String, required: true},
      listPrice: {type: String, required: true},
      availableColors: {type: [String], required: true},
      mileage: {type: String, required: true},
      power: {type: String, required: true},
      maxSpeed: {type: String, required: true}
   },
   {versionKey: false}
);

module.exports = mongoose.model("oemSpecs", oemSpecsSchema);
