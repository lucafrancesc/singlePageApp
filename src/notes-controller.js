
(function(exports){

  function returnText(){
    document.getElementById("submit").addEventListener("click", function() {
    document.getElementById('display').innerHTML += showText(document.getElementById('noteArea').value) + "<br>";
    })
  }
  exports.returnText = returnText
})(this)
