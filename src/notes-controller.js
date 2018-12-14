(function(exports) {

  function showNotes() {
    document.getElementById("allNotes").addEventListener('click', function (event) {
      event.preventDefault();
      var input = document.getElementById("note").value
      required(input);
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

  function home() {
    document.getElementById("home").addEventListener('click', function (event) {
      event.preventDefault();

      document.getElementById("notes").innerHTML = listNotes()
    })
  }



  exports.getId = getId
  exports.home = home
  exports.showNote = showNote
  exports.showNotes = showNotes
}) (this)
