const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
    name: {
        type: String , 
        required :true 
    }, 
     email: {
        type: String , 
        required :true , 
        unique : true
    }, 
     name: {
        type: String , 
        required :true 
    }, 
    city:String, 
    age : Number , 
    gender: {
        type :String , 
        enum:["Male" , "Female" , "Other"]} , 
} , {timestamps : true }); 

module.exports = mongoose.model("Customer" , customerSchema);