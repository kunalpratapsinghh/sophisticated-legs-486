const express=require("express");
const mongoose=require("mongoose");
require("dotenv").config();
let MongoUrl = process.env.MongoUrl; 
console.log(MongoUrl) 

const cors = require('cors');
const router = require("./Router/Router");
const connection = require("./db"); 
const app=express();


app.use(cors());

app.use(express.json())
app.use("/",router) 

app.listen(8080,async(req,res)=>{ 
    try {
        await mongoose.connect(`${MongoUrl}`)
        console.log("Connected")
    } catch (error) {
        console.log("Connection Error")
    }
})