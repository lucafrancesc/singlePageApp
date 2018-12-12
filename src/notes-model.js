
(function(exports){
  function showText(string) {
    return maxLenght(string, 10).fontcolor(randomColor()) + "<br>";
  }

  function randomColor() {
   var colors = ['red', 'green', 'blue', 'orange', 'yellow'];
   return colors[Math.floor(Math.random() * colors.length)];
  }

  function maxLenght(string, length) {
  	return string.substring(0, length);
  }

  exports.showText = showText
})(this)
