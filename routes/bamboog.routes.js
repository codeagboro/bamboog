const express = require("express");
const { allUsers, getUser, addDrinks } = require("../controller/admin.controller");
const { userSignup, login, availableDrinks } = require("../controller/users.controller");
const { authenticate } = require("../middleware/authentication");
const { authorize } = require("../middleware/authorize");
const { validateRequest, schemas } = require("../middleware/validate");

const router = express.Router();

router.post("/signup",validateRequest(schemas.signupSchema), userSignup);
router.post("/login",validateRequest(schemas.loginSchema), login);
router.get("/alldrinks",authenticate, availableDrinks);
router.get("/allusers",authenticate, authorize(["admin"]), allUsers);
router.get("/getUser/:email",authenticate, authorize(["admin"]), getUser);
router.post("/createdrink",authenticate, authorize(["admin"]), addDrinks);

module.exports = router;