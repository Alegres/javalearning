/* Some js for my showbox */
var stat = document.getElementById("status");

var colors = ["blanchedalmond", "azure", "beige", "bisque"];
var counter = 0;

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

function changeColor() {
    
    if (counter >= colors.length) {
        counter = 0;
    }
    
    stat.style.backgroundColor = colors[counter];
    counter++; 
    
}

window.onload = function() {
    setUpEvents();
    setInterval(changeColor, 3000);
}

