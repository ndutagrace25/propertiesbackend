const express = require("express");
const router = express.Router();
const { verifyToken } = require("../utils");

const { houseController } = require("../controllers");

// get users
router.get("/", houseController.getAllHouses);

// post a user
router.post("/", houseController.saveHouseDetails);

module.exports = router;
