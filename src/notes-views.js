(function(exports){
  function form(){
    document.write("<h3>hello</h3>")
    document.write("<input type='text' id='note'></h3>")
    document.write("<input type='submit' id='allNotes' value='Add note'><br>")
    document.write("<input type='submit' id='singleNote' value='View note'>")
    document.write("<input type='submit' id='home' value='home'>")
    document.write("<p id='notes'></p>")
  }
  exports.form = form
})(this)
