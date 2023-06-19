
const express = require("express");

const { getall, getOemId, createOems } = require("../controllers/oemCar");
const oemRouter = express.Router();


oemRouter.get("/", getall)
oemRouter.get("/:id", getOemId)
oemRouter.post("/post",createOems)

  module.exports= oemRouter ;
  