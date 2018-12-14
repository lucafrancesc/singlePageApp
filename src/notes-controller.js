(function(exports) {

  function showNotes() {
    document.getElementById("allNotes").addEventListener('click', function (event) {
      event.preventDefault();
      var input = document.getElementById("note").value
      insertNote(input);
      document.getElementById("notes").innerHTML = listNotes()
    })
  }

  function getId() {
    var url = window.location.hash.split('');
    return url[1];
  }

  function showNote() {
    document.getElementById("singleNote").addEventListener('click', function (event) {
      event.preventDefault();
      document.getElementById("notes").innerHTML = showSingleNote()
    })
  }

  exports.getId = getId
  exports.showNote = showNote
  exports.showNotes = showNotes
}) (this)
