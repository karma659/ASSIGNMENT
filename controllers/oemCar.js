var oemSpecs = require("../models/oemSchema");

//GET ALL Cars in myInventory
const getall = async (req, res) => {

   try {
      const data = await oemSpecs.find();

      res.send(data);
   } catch (err) {
      res.send(err.message);
      console.log("err :", err);
   }
};

// GET A particular OEM MODEL
const getOemId = async (req, res) => {
   const ID = req.params.id;
   console.log("id : ", ID);

   try {
      const data = await oemSpecs.find({_id: ID});

      res.send(data);
   } catch (err) {
      res.send(err.message);
      console.log("err :", err);
   }
};

//create an ARRAY of oem MODELS
const createOems = async (req, res) => {
   const data = req.body.data;
   console.log("data:", data);
   try {
      const oems = await oemSpecs.insertMany(data);
      res.json(oems);
   } catch (err) {
      console.log({msg: "Error Occured", error: err});
   }
};

module.exports = {
   getall: getall,
   getOemId: getOemId,
   createOems: createOems
};
