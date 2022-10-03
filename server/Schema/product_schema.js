const {Schema,model} = require("mongoose");
const Cart_schema= new Schema({
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

const product_model = model("product",Cart_schema)
module.exports=product_model
