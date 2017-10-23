/* This script will do some stuff with elements */
var parent = document.getElementById("links");
var child = parent.getElementsByTagName("a");

parent.removeChild(child[0]);