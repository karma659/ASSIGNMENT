var jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {

   const bearerHeader = req.headers["authorization"] || req.headers["Authorization"]  ;
    console.log("bearerHeader  :",bearerHeader);

   if (bearerHeader === null) {
      console.log("token NULL", bearerHeader);
      res.status(403).json({msg: " token NULL"});
   }

   try {
      const token = bearerHeader.split(" ")[1]  ;

      console.log("auth token :",token);
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECERT);
      if (decoded) {
         console.log("auth req.body.dealer", decoded.dealerid);
         req.body.dealer = decoded.dealerid;

    
      } else {
         console.log("Unauthorized");
      }
      next();
   } catch (err) {
      console.log("ERROR  Authentication error ", err);
      res.status(498).json({msg: "Incorrect Login , Try Again "});
   }
};

module.exports = {
   verifyToken: verifyToken
};
