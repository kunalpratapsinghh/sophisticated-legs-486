const {Schema,model} = require("mongoose");
const Cart_schema= new Schema({
    //userid:"",
    Title:String,
    Brand:String,
    Description:String,
    Image_url:String,
    Price:Number,
    Category:String


},{
    strict:false
},
{
    versionKey:false
})

const cart_model = model("cart",Cart_schema)
module.exports=cart_model
