/** @format */

const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/users.model");
const products = require("../models/products");


exports.allUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(201).json({
      users,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.getUser = async (req, res) => {
  const { email } = req.params
  try {
    const userDetail = await User.findOne({ email });

    if (!userDetail) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    return res.status(201).json({
      userDetail,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.addProducts = async (req, res) => {
  const { productName, category, quantity, price } = req.body;
  try {
    const productExists = await products.findOne({ productName });

    if (productExists) {
      await products.findOneAndUpdate(
        { productName },
        {
          $inc: { quantity },
        },
        {
          new: true,
        }
      );
      return res.status(200).json({
        message: `${productName} updated by ${quantity}`,
      });
    }

    const newProduct = await products.create({
      productName,
      category,
      quantity,
      price,
    });

    return res.status(200).json({
      message: `${productName} added successfully`,
      newProduct,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

