/* This script will create some events */
var introduction = document.getElementById("introduction");

introduction.onclick = function() {
    this.innerHTML = "Klikniete";
}

var list = document.getElementById("list");
var el = list.getElementsByTagName("li");

el[0].onmouseover = function() {
    this.innerHTML = "Najechales";
}
