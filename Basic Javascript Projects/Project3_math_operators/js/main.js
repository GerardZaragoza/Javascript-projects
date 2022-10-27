function addition_Function () {// this shows what function will be used in the script
    var addition = 5 + 7;//this is the variable and the operator function that will be used
    document.getElementById("p1mo").innerHTML =  + addition;// this is the tag that looks for the id "p1mo" and displays the function of addition.
}

function subtraction_Function () {// this shows what function will be used in the script
    var subtraction = 6 - 3;//this is the variable and the operator function that will be used
    document.getElementById("p2mo").innerHTML =  + subtraction;// this is the tag that looks for the id "p2mo" and displays the function of addition.
}

function multiplication() {// this shows what function will be used in the script
    var simple_math = 5 * 8;//this is the variable and the operator function that will be used
    document.getElementById("p3mo").innerHTML =  + simple_math;// this is the tag that looks for the id "p3mo" and displays the function of addition.
}

function division() {// this shows what function will be used in the script
    var simple_math = 15 / 3;//this is the variable and the operator function that will be used
    document.getElementById("p4mo").innerHTML =  + simple_math;// this is the tag that looks for the id "p4mo" and displays the function of addition.
}

function more_math () {// this shows what function will be used in the script
    var simple_math = (10 / 2) + 5 * (4 - 2);//this is the variable and the operator function that will be used
    document.getElementById("p5mo").innerHTML = "10 divided by 2, plus 5, multiplied by 4 subtracted by 2 equals " + simple_math;// this is the tag that looks for the id "p5mo" and displays the function of addition.
}

function modulus_operator() {// this shows what function will be used in the script
    var simple_math = 42 % 5;//this is the variable and the operator function that will be used
    document.getElementById("p6mo").innerHTML= "42 / 5 has a remainder of:"+ simple_math;// this is the tag that looks for the id "p6mo" and displays the function of addition.
}

function negation_operator() {// this shows what function will be used in the script
    var x = 5;// the variable
    document.getElementById("p7mo").innerHTML = -x;// this is the tag that looks for the id "p7mo" and displays the function of addition.
}

var x = 1;// the variable that will get increased
x++;// the increment function
document.write(x);// tag that will display the function

document.write ("<br />") // creates a space between scripts
document.write ("<br />") // creates a space between scripts

var x = 5;// the variable that will get decresed
x--;// the decrement function
document.write(x);// tag that will display the function

document.write ("<br />") // creates a space between scripts
document.write ("<br />") // creates a space between scripts

window.alert(Math.random()* 1000000);// creates a pop up window that displays a random number from 0 up to 1 million.(decimals included)