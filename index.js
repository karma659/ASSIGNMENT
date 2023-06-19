var express = require("express");
var cors = require("cors");
const dotenv = require("dotenv");
var connectDb = require("./models/connectionDB");
const marketPlaceInventorySchema = require("./models/marketPlaceInventorySchema");
const {verifyToken} = require("./middlewares/authentication");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const path=require("path");

var app = express();
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
dotenv.config();
connectDb();
var port = process.env.PORT || 5000;


const dirname = path.resolve()
app.use('/uploads', express.static(path.join(dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
   app.use(express.static(path.join(dirname, '/frontend/build')))
 
   app.get('*', (req, res) =>
     res.sendFile(path.resolve(dirname, 'frontend', 'build', 'index.html'))
   )
 } else {
   app.get('/', (req, res) => {
     res.send('API is running....')
   })
 }




const dealerRoutes =require("./routes/dealerroutes")
const OemRoutes =require("./routes/Oemroutes")
const marketPlaceInventoryRoutes =require("./routes/marketPlaceInventoryroutes")

app.use('/dealer', dealerRoutes) ;
app.use('/oem',verifyToken,OemRoutes);
app.use('/marketPlaceInventory',verifyToken,marketPlaceInventoryRoutes);




app.listen(port, (req,res) => {
   console.log(`Server running on port ${port}`);

});