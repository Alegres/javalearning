/* This script will perform some init actions */

var initInfo = document.getElementById("initInfo");
var av = getAverage(5, 10);

initInfo.innerHTML += av.toString() + "<br />";