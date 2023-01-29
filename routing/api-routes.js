const fs = require("fs");

var uniqid = "uniqid";

module.exports = function (app) {
  app.get("/api/notes"(req, res) => {
    console.log("execute get notes request");

    let data = fs.readFileSync ("./api/data/db.json", "utf-8");

    res.json(JSON.parse(data));
    
    
  });
};

//API post requests
app.post("api/notes", (req, res) => {
const newNote = {
...req.body,
id: uniqid(),
};
console.log ("post request for new notes");
//read data from json file
let data = fs.readFileSync("./app/data/db.json", "utf-8");

//push new notes in file db.json
data.JSON.push(newNote);

//write notes data to db.json file
fs.writeFile(
"./app/data/db.json",
JSON.stringify(data.JSON),
(err, text) =>{
if (err){
    console.error(err);
    return;

console.log("hello", text);
}
};

console.log("you have added a new note");

// send json data response
res.json(data);
)
})

//API delete request
app.delete("./app/notes/:id", (req, res) =>{
    //read file
    let data = fs.readFileSync("./app/data/db.json", "utf-8");
    //variable for filter method
    const dataJSON = JSON.parse(data)
    const newNote = dataJSON.filter((note) => {
        return note.id !== req.params.id;
    })
    fs.writeFile("./app/data/db.json", JSON.stringify(newNote), (err, text)=> {
    if (err) {
        console.log (err);
        return;
    }
    })
    res.json(newNote);
})
