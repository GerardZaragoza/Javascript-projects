function Ride_function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";

}


document.write ("<br />")

function Age_function() { //this displays the function
    var Age, Can_vote; // this are the variables
    Age = document.getElementById("Age").value; // this one is used to reference the i.d. Age
    Can_vote = (Age < 18) ? "You are too young to vote":"You are old enough to vote"; // this will display the answer from the input.
    document.getElementById("Vote").innerHTML = Can_vote + "to vote.";// this is the i.d. for <p>
    
}

document.write ("<br />")

function Card (Color, Casting_cost, Creature_type) {
    this.Card_Color = Color;                        // the "this" keyword indicates who is the owner of the code
    this.Card_Casting_cost = Casting_cost;
    this.Card_Creature_type = Creature_type;
}
var Black = new Card ("Black", "2 Colorless 2 Black", "Zombie"); // the "new" generates  an empty object that bounds a property function declared by "this"
var White = new Card ("White", "1 Colorless 2 White", "Knight");
var Green = new Card ("Green", "3 Colorless and 1 Green", "Djinn");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Gerard casted a " + Green.Card_Color +   "-colored "   + Green.Card_Casting_cost  + " Mana" + " Legendary " +
      Green.Card_Creature_type +  " creature"; // this strings up the keywords from the object new
}

function count_Function () { // this shows the function that we want to happen
    document.getElementById("Counting").innerHTML= Count();
    function Count() { //this is the nested function
        var Starting_point = 3; // starting variable point
        function Plus_two() {Starting_point += 2;}// displays the sum of the starting point + two
        Plus_two();
        return Starting_point;
    }
}