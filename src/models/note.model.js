const { v4: uuidv4  } = require('uuid');

class Note {

    id = '';
    title = '';
    content = '';
    password = false;
    createdAt = null;

    /**
     * 
     * @param {String} title The title of the note 
     * @param {String} content The content of the note
     * @param {Boolean} password Marks if a note is protected or no by password
     * @returns The new note created
     */
    constructor(title, content, password) {
        this.id = uuidv4();
        this.title = title;
        this.content = content;
        this.password = password ? password : false;
        this.createdAt = new Date().toISOString().substr(0, 10);
    }

}

module.exports = Note;