const express = require("express")
const { getall, getDealerInventory, editCar, deleteCar, createCar } = require("../controllers/marketcontroller")

const MarketplaceInventoryRouter = express.Router()

MarketplaceInventoryRouter.get("/",getall )
MarketplaceInventoryRouter.get("/dealer",getDealerInventory)
MarketplaceInventoryRouter.post("/create", createCar)
MarketplaceInventoryRouter.delete("/delete/:id",deleteCar)
MarketplaceInventoryRouter.patch("/update/:id",editCar)

module.exports = MarketplaceInventoryRouter;
