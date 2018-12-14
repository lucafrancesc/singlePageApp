(function(exports) {

  var notes = []

  function note(singleNote){
    return singleNote
  }

  function insertNote(userInput){
    notes.push(userInput)
  }

  function listNotes(){
    var list = notes.map(function(note) {
      return note;
    });
    return list;
  }

  exports.note = note
  exports.listNotes = listNotes
  exports.insertNote = insertNote
})(this)
