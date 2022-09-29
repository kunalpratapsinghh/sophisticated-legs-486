const express = require("express");
const app = express();
const axios = require("axios");
const router = express.Router();
app.use(express.json());


router.get("/",(req,res)=>{
    res.send("Hello")
})

router.get("/checkout",(req,res)=>{
    res.send("Hello")
})


module.exports = router;