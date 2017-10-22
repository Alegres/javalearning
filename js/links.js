/* This script will write all links into #list div in index.html file */

var links = document.getElementsByTagName("a");

for (ia = 0; ia < links.length; ia++) {
    document.getElementById("list").innerHTML += "<li>" + links[ia].getAttribute("href") + "</li>";
}