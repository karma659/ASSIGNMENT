const mongoose = require("mongoose");
const marketPlaceInventory = require("./marketPlaceInventorySchema");

const dealerSchema =  mongoose.Schema({
  name : { type: String,  required: [true, "Please add  name"], },
  email : { type: String,  required: [true, "Please add the email address"] , unique: [true, "Email address already taken"], },
  password : { type: String,  required: [true, "Please add the  password"] , } ,
  inventory : [{ type: mongoose.Schema.Types.ObjectId, ref: 'marketPlaceInventory'}] ,
},{versionKey:false});

module.exports = mongoose.model('Dealer', dealerSchema);


