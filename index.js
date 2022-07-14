const yargs = require('yargs')
const pkg = require('./package.json')
const {addNote, printNotes, removeNote, remove, edit} = require('./notes.controller')

yargs.version(pkg.version)

yargs.command({
  command: 'add',
  describe: 'Add new note to list',
  builder: {
    title: {
      type: 'string',
      describe: 'Note title',
      demandOption: true
    }
  },
  handler({ title }) {
    addNote(title)
  }
})

yargs.command({
  command: 'list',
  describe: 'Print all notes',
  async handler() {
    printNotes()
  }
})

yargs.command({
  command: "remove",
  describe: "Remove note by id",
  builder: {
    id: {
      type: 'string',
      describe: 'remove id',
      demandOption: true
    }
  },
  handler({ id }) {
    remove(id)
  }
})

yargs.command({
  command: "edit",
  describe: "Edit note by id",
  builder: {
    id: {
      type: 'string',
      describe: 'edit element',
      demandOption: true
    }
  },
  handler({ id, title }) {
    edit(id, title)
  }
})

yargs.parse()