const {Schema,model} = require("mongoose");
const Cart_schema= new Schema({
    //userid:"",
    user_id:Schema.Types.ObjectId,
    product_id:Schema.Types.ObjectId,
    Title:String,
    Brand:String,
    count:{type:Number,default:1}, 
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
