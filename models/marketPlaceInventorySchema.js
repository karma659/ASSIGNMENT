const mongoose = require("mongoose");
const Dealer = require("./dealerSchema");
const oemSpecs = require("./oemSchema");

const marketplaceInventorySchema = mongoose.Schema(
   {
      image: {type: String, required: true},
      title: {type: String, required: true},
      currentPrice: {type: String},
      description: {type: [String], required: true},

      kmsOnOdometer: {type: String, required: true},
      majorScratches: {type: Boolean, default: false},
      originalPaint: {type: Boolean, default: true},
      accidentsReported: {type: String},
      previousBuyers: {type: String},
      registrationPlace: {type: String, required: true},

      dealer: {type: mongoose.Schema.Types.ObjectId, ref: "Dealer"},
      oemSpecs: {type: mongoose.Schema.Types.ObjectId, ref: "oemSpecs"}
   },
   {versionKey: false}
);

module.exports = mongoose.model("MarketplaceInventoryModel", marketplaceInventorySchema);
