const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        firstName:{
            type: String,
        },
        lastName:{
            type: String,
        },
        age:{
            type: Number,
        },
        email:{
            type: String,
        },
        password:{
            type: String,
        },
        phoneNumber:{
            type: String,
        },
        role:{
            type:String,
            enum: ["user", "admin"],
            default: "user",
        }
    },
    {
        timestamps : true,
    }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;