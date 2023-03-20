const express = require("express");
const { allUsers, getUser, addProducts } = require("../controller/admin.controller");
const { userSignup, login, findByCategory, logout } = require("../controller/users.controller");
const { authenticate } = require("../middleware/authentication");
const { authorize } = require("../middleware/authorize");
const { validateRequest, schemas } = require("../middleware/validate");
addProducts
const router = express.Router();

router.post("/signup",validateRequest(schemas.signupSchema), userSignup);
router.post("/login",validateRequest(schemas.loginSchema), login);
router.get("/allproduct/:category",authenticate, findByCategory);
router.get("/allusers",authenticate, authorize(["admin"]), allUsers);
router.get("/getUser/:email",authenticate, authorize(["admin"]), getUser);
router.post("/createproduct",authenticate, authorize(["admin"]), addProducts);
router.get("/logout", logout);

module.exports = router;