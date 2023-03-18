/** @format */

const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/users.model");
const drinks = require("../models/drinks.model");


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

exports.addDrinks = async (req, res) => {
  const { email, drinkName, manufacturer, quantity, price } = req.body;
  try {
    const drinkExists = await drinks.findOne({ drinkName });

    if (drinkExists) {
      await drinks.findOneAndUpdate(
        { drinkName },
        {
          $inc: { quantity },
        },
        {
          new: true,
        }
      );
      return res.status(200).json({
        message: `${drinkName} updated by ${quantity}`,
      });
    }

    const newDrink = await drinks.create({
      drinkName,
      manufacturer,
      quantity,
      price,
    });

    return res.status(200).json({
      message: `${drinkName} added successfully`,
      newDrink,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

