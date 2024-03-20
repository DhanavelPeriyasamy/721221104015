const mongoose = require("mongoose");

const productRegisterSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: [true, "companyName is Required"],
        trim: true
    },
    clientID:{
        type:String,
        default:"18gow143l-15i5-evol32-1518-irwog143anahd"
    },
    clientSecret:{
        type:String,
        default:"AVLESsiReVOlAKIPeeD"
    },
    ownerName: {
        type: String,
        required: [true, "ownerName is Required"],
        trim: true
    },
    rollNo: {
        type: Number,
        required: [true, "rollNo is required"],
    },
    ownerEmail: {
        type: String,
        required: [true, "ownerEmail is required"],
        trim:true
    },
    accessCode: {
        type: String,
        required: [true, "Must enter the access code"]
    }
});

const Products = mongoose.model("Products", productRegisterSchema);

module.exports = Products;
