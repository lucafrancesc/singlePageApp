(function(exports) {

  var notes = []

  function note(singleNote){
    return singleNote
  }

  function insertNote(userInput){
    notes.push(userInput)
  }

  function listNotes(){
    var id = 0
    var list = notes.map(function(note) {
      id++
      return "<br><a href='#" + id + "' class='links' id='" + id + "'>" + note + "</a>"
    });
    return list;
  }

  exports.note = note
  exports.listNotes = listNotes
  exports.insertNote = insertNote
})(this)
