var jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
   const bearerHeader = req.headers["authorization"] || req.headers["Authorization"];
   console.log("bearerHeader  :", bearerHeader);

   if (bearerHeader === null) {
      console.log("token NULL", bearerHeader);
      res.status(403).json({msg: " token NULL"});
   }

   try {
      const token = bearerHeader.split(" ")[1];

      console.log("auth token :", token);
      const decoded = jwt.verify(token,'123456789');
      if (decoded) {
         console.log("auth req.body.dealer", decoded.dealerid);
         req.body.dealer = decoded.dealerid;
         next();
      } else {
         console.log("Unauthorized");
      }
   
   } catch (err) {
      console.log("ERROR  Authentication error ", err);

   }
};

module.exports = {
   verifyToken: verifyToken
};
