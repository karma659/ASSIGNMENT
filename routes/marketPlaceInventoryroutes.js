const express = require("express");
const {
   getall,
   getDealerInventory,
   editCar,
   deleteCar,
   createCar
} = require("../controllers/marketcontroller");

const MarketplaceInventoryRouter = express.Router();

MarketplaceInventoryRouter.get("/", getall); // get all the second hand cars
MarketplaceInventoryRouter.get("/dealer", getDealerInventory); // get only dealer inventory cars
MarketplaceInventoryRouter.post("/create", createCar); // create a second hand car from OEM Car model
MarketplaceInventoryRouter.delete("/delete/:id", deleteCar); // delete the car created by dealer
MarketplaceInventoryRouter.patch("/update/:id", editCar); //  edit the second hand car created earlier

module.exports = MarketplaceInventoryRouter;
