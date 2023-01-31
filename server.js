//Dependencies
const express = require("express");
const path = require("path");
const htmlRoutes = require("./routing/html-routes");
const apiRoutes = require("./routing/api-routes");

//sets up Express
const app = express();
const PORT = process.env.PORT || 8000;

// sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));

//parse app
app.use(express.json());

app.use(express.static(path.join(__dirname + "/Develop/public")));
//app.use(express.static("public"));

/*
require("./routing/api-routes.js")(app);

require("./routing/html-routes.js")(app);
*/
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
