document.write("10" + 5); // this displays the coercion between a string and a number

document.write ("<br />") // this creates spaces in the display


document.write(45E330) // this displays a positive infinity

document.write ("<br />")

document.write(-45E330) // this displays a negative infinity



function my_Function () {
    document.getElementById("test").innerHTML  = 0/0; // this displays the NaN function
}

function my_function() {
    document.getElementById("test2").innerHTML = isNaN ('string or no'); // this displays the NaN function that will result to "true"
}

document.write ("<br />")

function this_function() {
    document.getElementById("test3").innerHTML = isNaN ('12453.657432423');// this displays the NaN function that will result to "false"
}



function another_function () {
    document.getElementById("boolean1").innerHTML  = Boolean (10 < 5); // this displays the boolean function that will result to a "false"
}



function func_function () {
    document.getElementById("boolean2").innerHTML  = Boolean (10 > 5); // this displays the boolean function that will result to "true"
}

 

console.log(6+8); // this will display "14" in the console log when f12 is pressed and the console is selected



console.log(new Boolean(false)) // This will display "false" in the console log using boolean function


document.write((10+29)==15) // This function will check for equality between both variables

document.write ("<br />")

A = 97;
B = 97;
document.write(A===B); // this will compare and check if variable A and variable B is the same using the triple "=", this will display true

document.write ("<br />")

A = 97;
B = 98;
document.write(A===B); // this will compare and check if variable A and variable B is the same using the triple "=", this will display false because they are not the same number

document.write ("<br />")

A = 97;
B = "97";
document.write(A===B); // this will compare and check if variable A and variable B is the same using the triple "=", this will display false because one is a number and the other is a string.

document.write ("<br />")

A = "Wrath of God";
B = "Wrath of god";
document.write(A===B); // this will compare and check if variable A and variable B is the same using the triple "=", this will display false because the "G" in variable a is capitalize and the "G" in variable B is not.

document.write ("<br />")

document.write(6 > 10 || 20 > 12); // this boolean operator checks if both statements are true

document.write ("<br />")

document.write (6 > 10 || 20 < 12)

document.write ("<br />")

function not_Function() {
document.getElementById("not").innerHTML = !(20 > 15); // this operator checks if something is true, in this case the answer is  true but the result will display false
}

document.write ("<br />")

function not_function() {
    document.getElementById("not2").innerHTML = !(25 > 35); // this operator checks if something is true, in this case the answer is false but the result will display true
}