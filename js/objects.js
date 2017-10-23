/* This script will demonstrate how objects work */
var myCar = new Object();

myCar.drive = function() { return "I am driving..."; };

var myGirl = {
    name: "Ania", 
    rate: 10, 
    speak: function() { return "I love you"; }
};

// Constructor
var Car = function(maxSpeed, driver) {
    this.maxSpeed = maxSpeed;
    this.driver = driver;
}

var myNewCar = new Car(50, "Damian");