const MarketplaceInventoryModel = require("../models/marketPlaceInventorySchema");

//GET ALL MARKET CARS
const getall = async (req, res) => {
   try {
      const data = await MarketplaceInventoryModel.find().populate("oemSpecs");

      console.log("data length ", data.length);
      res.status(200).send(data);
   } catch (err) {
      res.send(err.message);
      console.log("error Getting MARKET CARS  :", err);
   }
};

// GET DEALER INVENTORY
const getDealerInventory = async (req, res) => {
   const ID = req.body.dealer;
   console.log(req.body);
   console.log("ID:", ID);
   try {
      const car = await MarketplaceInventoryModel.find({dealer: ID})
         .populate("dealer")
         .populate("oemSpecs");
      res.json(car);
   } catch (err) {
      console.log({msg: "Error Occured", error: err});
   }
};

//Create MyCar post From OEM
const createCar = async (req, res) => {
   const payload = req.body;
   console.log("auth", req.dealer);
   console.log("req body ", req.body);
   payload.image = req.file.path;
   payload.dealer= req.dealer;

   console.log("payload ", payload, req.dealer);
   const car = new MarketplaceInventoryModel(payload);
   await car.save();
   res.send(car);
};

//Delete my car post from Inventory
const deleteCar = async (req, res) => {
   const ID = req.params.id;
   try {
      await MarketplaceInventoryModel.findByIdAndDelete({_id: ID});
      res.send(`car  Deleted`);
   } catch (err) {
      console.log({msg: "Error Occured", error: err});
   }
};

//Edit my car post from Inventory
const editCar = async (req, res) => {
   const ID = req.params.id;
   try {
      let data = await MarketplaceInventoryModel.findByIdAndUpdate({_id: ID}, req.body);
      res.send(data);
   } catch (err) {
      console.log({msg: "Error Occured", error: err});
   }
};

module.exports = {
   getall: getall,
   getDealerInventory: getDealerInventory,
   createCar: createCar,
   deleteCar: deleteCar,
   editCar: editCar
};
