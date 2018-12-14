(function(exports) {

  function showNote() {
    document.getElementById("submit").addEventListener('click', function (event) {
      event.preventDefault();
      var input = document.getElementById("note").value
      insertNote(input);
      getId()
      document.getElementById("notes").innerHTML = listNotes()
    })
  }

  function getId() {
    var url = window.location.hash.split('');
    console.log(url[1])
  }

  function showSingleNote() {

  }

  exports.showSingleNote = showSingleNote
  exports.showNote = showNote
}) (this)
