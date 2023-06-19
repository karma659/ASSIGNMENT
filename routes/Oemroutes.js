
const express = require("express");
var oemSpecs = require("../models/oemSchema");
const oemRouter = express.Router();


oemRouter.get("/", async (req, res) => {
    let { search } = req.query;
  
    try {
      const data = search ? await oemSpecs.find(
          { $text: { $search: search } },
          { score: { $meta: "textScore" } }
          ).sort({ score: { $meta: "textScore" } })
          :
          await oemSpecs.find();
  
      res.send(data);
    } catch (err) {
      res.send(err.message);
      console.log('err:', err);
    }
  });
  
  oemRouter.get("/:id", async (req, res) => {

      const ID = req.params.id
      console.log('id:', ID)
    
      try {
        const data = await oemSpecs.find({_id:ID})
    
        res.send(data);
      } catch (err) {
        res.send(err.message);
        console.log('err:', err);
      }
    });
    
  
 
  oemRouter.post("/post",async(req,res)=>{
      const data = req.body.data ;
      
      console.log('data:', data);


      try{
          const notes = await oemSpecs.insertMany(data);
          res.json(notes);
      }catch(err){
          console.log({"msg":"Error Occured","error":err})
      }
  });


  module.exports= oemRouter ;
  