const Note = require("./models/note.model");

const main = () => {

    const nota = new Note('Mi nota', 'Some content');
    console.log(nota);

}

module.exports = main;