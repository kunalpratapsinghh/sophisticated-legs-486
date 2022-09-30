const express = require("express");
const app = express();
const axios = require("axios");
const router = express.Router();
const cart_model = require("../Schema/cart_schema");
const product_model = require("../Schema/product_schema");
app.use(express.json());


router.get("/",(req,res)=>{
    res.send("Hello")
})

router.get("/checkout",(req,res)=>{
    res.send("Hello")
})

////////////////cart get
router.get("/cart",async (req,res)=>{

    try{
        let a = await cart_model.find();
        res.status(200).send(a);

    }catch(e){
        res.status(400).send(e.message)
    }


})
///////////////////////////// product page//////////////////////////////

//get

router.get("/product",async(req,res)=>{
    try{
        let product = await product_model.find();
        res.status(200).send(product);

    }catch(e){
        res.status(400).send(e.message)
    }
})
////post

router.post("/cart/:user",async(req,res)=>{
    
    // try{
    //     let cart = new cart_model(...req.body);
    //     await cart.save();
    //     return res.status(201).send("successfull");

    // }catch(e){
    //     res.status(400).send("something went wrong")

    // }
})
//patch

// router.patch("/cart/:id",async(req,res)=>{
//     let {id}= req.params.id;


//     try{

//         let data = cart_model.updateOne({_id:id},{});{name:"saurav",cart:[]}
        

//     }catch(e){

//     }
// })

module.exports = router;