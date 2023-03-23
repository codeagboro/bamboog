const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/users.model")
const products = require("../models/products")

exports.userSignup = async (req, res) => {
    const {firstName, lastName, age, email, password, phoneNumber, role } = req.body;
    try {
    const emailexists = await User.findOne({ email });
    const phoneNumberExists = await User.findOne({ phoneNumber });
        console.log(emailexists);
    if (emailexists && phoneNumberExists){
        return res.status(409).json({
            message: "user with these details exists"
        })
    }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
 
    const newuser = await User.create({
        firstName,
        lastName,
        age,
        email,
        phoneNumber,
        password: hashedPassword,
        role
    })
 
    return res.status(200).json({
        message: "user created successfully",
        newuser
    })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        }); 
    }
    
};

exports.login = async (req, res) => {
    const {email, password,} = req.body;
    try {
        const userExistInDb = await User.findOne({ email });
        if (!userExistInDb){
            return res.status(404).json({
                message: "User not found",
            });
        }

        const isPasswordValid = await bcrypt.compare(password, userExistInDb.password);

        if (!isPasswordValid){
            return res.status(401).json({
                message: "Invalid credentials",
            });
        }

        const token = await jwt.sign({
            email: userExistInDb.email,
            id: userExistInDb._id,
            firstName: userExistInDb.firstName,
            lastName: userExistInDb.lastName,
            phoneNumber: userExistInDb.phoneNumber,
            role: userExistInDb.role
        },
            process.env.JWT_SECRET,
            {
                expiresIn: "60m",
            }
        );

        res.cookie("token", {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 1000 * 60 * 3, // 3 minutes
        })

        return res.status(200).json({
            message: "Login successful",
            token,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message,
          });
    }
}

exports.logout = async(req, res) =>{
    res.clearCookie("token");
    return res.status(200).json({
        message: "User logged out"
    })
}

exports.findByCategory = async (req, res) => {
    
    try{
            const { category } = req.params;
          
            const validCategories = ["Drinks", "Confectionery"];
            if (!validCategories.includes(category)) {
              return res.status(400).json({ message: "Invalid category" });
            }
          
            const findProducts = await products.find({ category });
            if (findProducts.length === 0) {
              return res.status(404).json({ message: "No items found in this category" });
            }
          
            const categoryItems = findProducts.map((product) => {
              return {
                productName: product.productName,
                price: product.price,
                quantity: product.quantity
              };
            });
          
            return res.status(200).json({
              categoryItems,
            });
          }
          
        catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message,
          });
    }
}
