/* Some js for my showbox */

function setUpEvents() {
    
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
    
}


window.onload = function() {
    setUpEvents();
}