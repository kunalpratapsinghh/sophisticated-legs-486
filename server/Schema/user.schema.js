const {Schema,model} = require("mongoose");
const user_schema= new Schema({
    //userid:"",
    email:{type:String,required:true,unique:true},
    firstname:String,
    lastname:String,
    mobile:{type:String,default:""}

},{
    strict:false
},
{
    versionKey:false
})

const user_model = model("user",user_schema)
module.exports=user_model
