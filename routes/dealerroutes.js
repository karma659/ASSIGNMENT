var express = require("express");
const {signup, login} = require("../controllers/register");
const dealerrouter = express.Router();

dealerrouter.post("/signup", signup); // signup
dealerrouter.post("/login", login); // login

module.exports = dealerrouter;
