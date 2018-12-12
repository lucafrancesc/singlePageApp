window.onload=function() {
 document.getElementById("btn").addEventListener("click", function() {
   document.getElementById("display").innerHTML += showText(document.getElementById("text").value);
 });
}
