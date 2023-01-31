const fs = require("fs");
const router = require("express").Router();

var uniqid = require("uniqid");

/*
module.exports = function (app) {
  app.get("/api/notes", (req, res) => {
    console.log("execute get notes request");

    let data = fs.readFileSync("./api/data/db.json", "utf-8");

    res.json(JSON.parse(data));
  });
};
*/

// ALL OF THESE ROUTES ARE PREFIXED WITH '/api'

router.get("/notes", (req, res) => {
  console.log("execute get notes request");

  let data = fs.readFileSync("./Develop/db/db.json", "utf-8");
  console.log(data);

  res.json(JSON.parse(data));
});

//API post requests
router.post("/notes", (req, res) => {
  const newNote = {
    ...req.body,
    id: uniqid(),
  };
  console.log("post request for new notes");
  //read data from json file
  let data = fs.readFileSync("./app/data/db.json", "utf-8");

  //push new notes in file db.json
  data.JSON.push(newNote);

  //write notes data to db.json file
  fs.writeFile("./app/data/db.json", JSON.stringify(data.JSON), (err, text) => {
    if (err) {
      console.error(err);
      return;

      console.log("hello", text);
    }
  });

  console.log("you have added a new note");

  // send json data response
  res.json(data);
});

//API delete request
router.delete("/notes/:id", (req, res) => {
  //read file
  let data = fs.readFileSync("./app/data/db.json", "utf-8");
  //variable for filter method
  const dataJSON = JSON.parse(data);
  const newNote = dataJSON.filter((note) => {
    return note.id !== req.params.id;
  });
  fs.writeFile("./app/data/db.json", JSON.stringify(newNote), (err, text) => {
    if (err) {
      console.log(err);
      return;
    }
  });
  res.json(newNote);
});

module.exports = router;
