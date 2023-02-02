//Dependencies
const express = require("express");

//routes
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

//sets up Express
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//use routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//starts the server
app.listen(PORT, function () {
  console.log("App listening on http://localhost/" + PORT);
});
