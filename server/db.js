require("dotenv").config();
let MongoUrl = process.env.MongoUrl; 
console.log(MongoUrl) 
const mongoose=require("mongoose");
  
const connection=mongoose.connect(MongoUrl) 
module.exports=connection
