// Require utils
const utils = require("util");
//Require uuid
const uuid = require("uuid").v1;
//Require fs
const fs = require("fs");

//Read fle async
const readFileAsync = utils.promisify(fs.readFile);
//Write file async
const writeFileAsync = utils.promisify(fs.writeFile);
//Create database class
class Db {
  //Add methods
  read() {
    return readFileAsync("db/db.json", "utf8");
  }
  write(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note));
  }
  getNotes() {
    return this.read().then((notes) => {
      let parsedNotes;
      //Parse notes
      try {
        parsedNotes = [].concat(JSON.parse(notes));
      } catch (err) {
        parsedNotes = [];
      }
      return parsedNotes;
    });
  }
  addNotes(note) {
    //Create notes
    const { title, text } = note;
    const newNote = { title, text, id: uuid() };
    return this.getNotes()
      .then((notes) => [...notes, newNote])
      .then((updatedNotes) => this.write(updatedNotes))
      .then(() => newNote);
  }
  removeNotes(id) {
    return this.getNotes()
      .then((notes) => notes.filter((note) => note.id !== id))
      .then((filteredNotes) => this.write(filteredNotes));
  }
}

//export database
module.exports = new Db();
