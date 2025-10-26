import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    name: String,
    email: String,
    age: String,
    
    description : {type: String, required: true},
    description : {type: String, required: true},
    price: {type: String, required: true},
    image: {type: String, required:true},
    category: {type: String, required :true}
})

const ecommerse = mongoose.food || mongoose.model("ecommerce", ecommerseSchema)

export default ecommerse