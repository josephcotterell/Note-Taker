//Dependencies
const express = require("express");
const path = require("path");

//sets up Express
const app = express();
const PORT = process.env.PORT || 8000;

// sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true }))

//parse app
app.use(express.json {});

app.use(express.static(path.join(__dirname + '/app/pubic')))

require("./app/routing/api-routes.js")(app);

require("./app/routing/html-routes.js")(app);

app.listen(PORT, function(){
    console.log('App listening on PORT: ' + PORT)
})



