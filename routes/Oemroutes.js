const express = require("express");

const {getall, getOemId, createOems} = require("../controllers/oemCar");
const oemRouter = express.Router();

oemRouter.get("/", getall); // Getall  the OEM Car models
oemRouter.get("/:id", getOemId); //GET a particular OEM Car model
oemRouter.post("/post", createOems); // Create multiple OEM Car model

module.exports = oemRouter;
