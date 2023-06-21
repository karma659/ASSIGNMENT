const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Dealer = require("../models/dealerSchema");

const signup = async (req, res) => {
   const {name, email, password} = req.body;

   try {
      const userr = await Dealer.find({email});

      if (userr.length) {
         console.log("userr", userr);
         res.status(200).json({msg: "User exist please Login"});
      } else {
         //Hash password
         const hashedPassword = await bcrypt.hash(password, 10);
         let user = new Dealer({name, email, password: hashedPassword});
         await user.save();

         res.status(201).json({msg: "New user registered"});
         res.redirect("/Login");
      }
   } catch (err) {
      console.log("ERROR Cant Signup", err);
   }
};

const login = async (req, res) => {
   const {email, password} = req.body;

   try {
      const user = await Dealer.findOne({email});
      console.log("user:", user._id);

      if (user && (await bcrypt.compare(password, user.password))) {
         const token = jwt.sign({dealerid: user._id}, '123456789' , {
            expiresIn: "12h"
         });

         res.header("authorization", "Bearer " + token);
         res.setHeader("authorization", `Bearer ${token}`);

         console.log({msg: "User successfully logged in", token: token});

         res.status(201).json({msg: "User successfully logged in", token: token});
      } else {
         res.status(200).send({msg: "Unauthorized  Invalid email or password"});
      }
   } catch (err) {
      console.log("Error Cant Login", err);
   }
};

module.exports = {
   signup: signup,
   login: login
};
