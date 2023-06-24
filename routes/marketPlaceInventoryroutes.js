const express = require("express");
const {
   getall,
   getDealerInventory,
   editCar,
   deleteCar,
   createCar
} = require("../controllers/marketcontroller");

const multer = require("multer");
const path = require("path");

// Configure multer for file uploads
const storage = multer.diskStorage({
   destination: "./uploads",
   filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
   }
});
const upload = multer({
   storage: storage
}).single("image");

const MarketplaceInventoryRouter = express.Router();

MarketplaceInventoryRouter.get("/", getall); // get all the second hand cars
MarketplaceInventoryRouter.get("/dealer", getDealerInventory); // get only dealer inventory cars
MarketplaceInventoryRouter.post("/create", upload, createCar); // create a second hand car from OEM Car model
MarketplaceInventoryRouter.delete("/delete/:id", deleteCar); // delete the car created by dealer
MarketplaceInventoryRouter.patch("/update/:id", editCar); //  edit the second hand car created earlier

module.exports = MarketplaceInventoryRouter;
