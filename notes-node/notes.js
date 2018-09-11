console.log('starting notes.js');

const fs = require('fs');

const addNote = (title, body) => {
  let notes = [];
  const note = {
    title,
    body
  };

  try {
    const notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (error) {
    
  }

  const duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
};

const getAll = () => {
  console.log('getting all notes');
};

const getNote = (title) => {
  console.log('here is the note');
};

const removeNote = (title) => {
  console.log('removing the note');
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}