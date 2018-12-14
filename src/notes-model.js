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
      return "<br>" + id + " - <a href='#" + id + "' class='links' id='" + id + "'>" + note + "</a>"
    });
    return list;
  }

  function showSingleNote() {
    if(notes.length === 0){
      return "Empty!"
    } else {
      // pass string to number
      var x = getId()
      return notes[x]
    }
  }

  function required(input) {
     if (input.length === 0 )
      {
         alert("Add a note");
         return false;
      }
      return insertNote(input);
    }


  exports.showSingleNote = showSingleNote
  exports.note = note
  exports.required = required
  exports.listNotes = listNotes
  exports.insertNote = insertNote
})(this)
