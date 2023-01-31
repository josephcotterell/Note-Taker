const path = require("path");
const router = require("express").Router();

/*
module.exports = function (app) {
  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/notes.html"));
  });
};
*/

router.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname + "/../Develop/public/notes.html"));
});

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/..Develop/public/index.html"));
});

module.exports = router;
