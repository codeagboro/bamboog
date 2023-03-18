const mongoose = require("mongoose");

const drinkSchema = new mongoose.Schema(
    {
        drinkName:{
            type: String,
        },
        manufacturer:{
            type: String,
        },
        price:{
            type: String,
        },
        quantity:{
            type: Number,
        }
    },
    {
        timestamps : true,
    }
);

const drinks = mongoose.model("drinks", drinkSchema);
module.exports = drinks;