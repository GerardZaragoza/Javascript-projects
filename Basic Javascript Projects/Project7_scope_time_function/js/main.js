var X = 5 // this is a global variable because the variable is outside the function
function add_numbers_1 (){
    document.write(99.9+ X + "<br>");
}
add_numbers_1();

function add_numbers_5 (){
    var Y = 99.9999 //this is a local variable because the variable is inside the function
    document.write(99.9+ Y + "<br>");
}
add_numbers_5();

function add_numbers_6(){ // this function will display an error on the console because "Y" is undefined for the reason that the Variable Y is a local variable and the function cannot access the variable needed
    document.write(99.9+ Y);
}
add_numbers_6();

function get_date(){
    if (new Date().getHours() >9){
        document.getElementById("hour").innerHTML= "wake up!"
    }

}

function Age_function () {
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        Drink = "You are old enough to drink Alcoholic drinks. A 6-pack? or A bottle?";
    }
    else {
        Drink = "You are to young to drink Alcoholic drinks. Scram!"
    }
    document.getElementById("How_old_are_you?").innerHTML= Drink;
}