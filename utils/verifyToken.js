// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

const verifyToken = async (req, res, next) => {
  // get auth header value
  const bearerHeader = req.headers["authorization"];

  //   check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    //   split at the space
    const bearer = bearerHeader.split(" ");
    // Get token from the split array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    res.sendStatus(403);
  }
};

module.exports = verifyToken;
