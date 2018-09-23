// console.log('starting notes.js');

const fs = require('fs');

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (error) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  const notes = fetchNotes();
  const note = {
    title,
    body
  };

  const duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {
  console.log('getting all notes');
  return fetchNotes();
};

const getNote = (title) => {
  const notes = fetchNotes();
  const note = notes.filter(n => n.title === title);
  return note;
};

const removeNote = (title) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter(note => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

const logNote = (note) => {
  debugger;
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
  console.log("--");
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
}