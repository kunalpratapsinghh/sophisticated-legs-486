const express=require("express");
const cors = require('cors');
const router = require("./Router/Router");
const connection = require("./db");
const app=express();
app.use(cors({
    origin: '*'
}));

app.use(express.json())
app.use("",router)

app.listen(8080,async(req,res)=>{
    try {
        await connection
        console.log("Connected")
    } catch (error) {
        console.log("Connection Error")
    }
})