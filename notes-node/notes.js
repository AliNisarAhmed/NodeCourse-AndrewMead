console.log('starting notes.js');

const addNote = (title, body) => {
  console.log('adding note ', title, body);
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