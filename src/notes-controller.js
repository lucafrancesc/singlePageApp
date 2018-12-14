(function(exports) {

  function add() {
    document.getElementById("submit").addEventListener('click', function (event) {
      event.preventDefault();
      var input = document.getElementById("note").value
      insertNote(input);

      document.getElementById("notes").innerHTML = "<a href='#'>" + listNotes() + "</a>";

    })
  }

  exports.add = add
}) (this)
