// (function(exports) {
//
  // function display() {
  //   var x = document.getElementById("text").value;
  //   document.getElementById("display").innerHTML = showText(x);
  // }
//
//   exports.display = display
//
// })(this);

function display() {
  var x = document.getElementById("text").value;
  document.getElementById("display").innerHTML = showText(x);
}

document.getElementById("btn").addEventListener("click", display);
