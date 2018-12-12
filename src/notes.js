function showText(string) {
 return string.fontcolor(randomColor());
}

function randomColor() {
 var colors = ['red', 'green', 'blue', 'orange', 'yellow'];
 return colors[Math.floor(Math.random() * colors.length)];
}
