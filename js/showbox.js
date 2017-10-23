/* Some js for my showbox */
var messagebox = document.getElementById("message");
var button = document.getElementById("btn1");

button.onclick = function() {
    if(messagebox.className == "open") {
        messagebox.className = "";
        button.innerHTML = "Show more";
    } else {
        messagebox.className = "open";
        button.innerHTML = "Hide message";
    }
}