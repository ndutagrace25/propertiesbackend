require("dotenv").config();

const types = require("pg").types;
const queries = require("../db/queries");
const ApiError = require("../errors");
const httpStatus = require("http-status");
const { validHouse, cleanPhone } = require("../utils");

types.setTypeParser(20, function () {
  console.log(parseInt("getting here"));
  return parseInt("2021-11-03T12:57:04.505Z", 10);
});

// fetch all houses
const getAllHouses = async (req, res, next) => {
  // verify access token provided

  // fetch houses from the db
  const houses = await queries.getAllHouses(req.query);

  // console.log("testing", testing);
  if (!houses) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      httpStatus[`${httpStatus.INTERNAL_SERVER_ERROR}_MESSAGE`]
    );
  }

  return res.status(httpStatus.OK).json({
    statusCode: httpStatus.OK,
    houses,
  });
};

// save house details
const saveHouseDetails = async (req, res, next) => {
  if (validHouse(req.body)) {
    const houseSaved = await queries.create(req.body);

    if (!houseSaved) {
      throw new ApiError(
        httpStatus.INTERNAL_SERVER_ERROR,
        httpStatus[`${httpStatus.INTERNAL_SERVER_ERROR}_MESSAGE`]
      );
    }

    return res
      .status(httpStatus.OK)
      .json({ statusCode: httpStatus.OK, houseSaved: houseSaved[0] });
  } else {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "All fields are required" });
  }
};

module.exports = {
  getAllHouses,
  saveHouseDetails,
};
