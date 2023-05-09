const createError = require("http-errors");
const express = require("express");
const connection = require("./db/knex");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// check db connection
connection
  .raw("SELECT 1")
  .then(() => console.log("Database connected successfully!"))
  .catch((err) => {
    console.log("Database failed to connect!");
    console.log(err);
  });

// Ensble CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "POST, GET, OPTIONS, DELETE, PUT,PATCH"
  );
  next();
});

// import routes
const { house } = require("./routes");

// initialize routes
app.use("/houses", house);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// set port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err : {},
  });
});

module.exports = app;
