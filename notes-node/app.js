// console.log('starting app');

// const fs = require('fs');
// const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

// =======================================================


// Options for .command yargs 

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const bodyOptions =  {
  describe: 'Body of the note',
  demand: true,
  alias: 'b'
};


// Setting up yargs

const argv = yargs
  .command('add', 'Add a new note', {  //.command() sets up description of each command we have available
    title: titleOptions,
    body: bodyOptions 
  })
  .command('list', 'Show all notes')
  .command('read', 'Read a note from db', {
    title: titleOptions
  })
  .command('remove', 'Remove a note from db', {
    title: titleOptions
  })
  .help()   //sets up yargs to return useful information
  .argv;
const command = argv._[0];

// console.log('Yargs: ', argv);
// console.log('Command: ', command);

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("--");
    console.log('note created: '); 
    notes.logNote(note);
  } else {
    console.log('note already exists');
  }
  
} else if (command === 'list') {
  const allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach(note => notes.logNote(note));

} else if (command === 'read') {
  let note = notes.getNote(argv.title);

  if (note.length >= 1) {
    console.log("--");
    console.log(`Note Read: `);
    notes.logNote(note[0]);
  } else {
    console.log('Note with that title not found');
  }

} else if (command === 'remove') {
  const noteRemoved = notes.removeNote(argv.title);
  const msg = noteRemoved ? 'Note was removed': 'No note found with that title';
  console.log(msg);

} else {
  console.log('command not recognized');
}