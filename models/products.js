const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema(
    {
        productName:{
            type: String,
        },
        category:{
            type: String,
            enum: ["Drinks", "Confectionery"]
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

const products = mongoose.model("products", productsSchema);
module.exports = products;