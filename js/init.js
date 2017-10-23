/* This script will perform some init actions */

var initInfo = document.getElementById("initInfo");
var av = getAverage(5, 10);

initInfo.innerHTML += av.toString() + "<br />" + sliced + "<br />";

for (ia = 0; ia < pizzaArray.length; ia++)
     initInfo.innerHTML += pizzaArray[ia] + "<br />";

initInfo.innerHTML += myCar.drive() + "<br />";