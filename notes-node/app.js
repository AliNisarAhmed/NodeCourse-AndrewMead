console.log('starting app');

// const fs = require('fs');
// const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');


const argv = yargs.argv;
const command = argv._[0];

console.log('Yargs: ', argv);
console.log('Command: ', command);

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body);
  if(note) {
    console.log('note created: '); 
    console.log('--');
    console.log(`title: ${argv.title}`); 
    console.log(`body: ${argv.body}`);
  } else {
    console.log('note already exists');
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  const noteRemoved = notes.removeNote(argv.title);
  const msg = noteRemoved ? 'Note was removed': 'No note found with that title';
  console.log(msg);
} else {
  console.log('command not recognized');
}