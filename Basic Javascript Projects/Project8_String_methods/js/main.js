function full_sentence() { // this function allows the computer to string together variables to make a complete sentence
    var part_1 = "I casted";
    var part_2 = " Wrath of god";
    var part_3 = " Destroy All Creatures.";
    var part_4 = " Boom!";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);// this part concatenate the diffrent variables
    document.getElementById("concatenate").innerHTML = whole_sentence;// this one calls out the id concatenate to be displayed in the computer
}

function slice_method (){// this function allows the computer to take a part of a string and dsiplay it
    var Sentence = "The Toronto EDH Club.";
    var Section = Sentence.slice(4,12);// this part tells the computer what part of the string will be displayed
    document.getElementById("slice").innerHTML = Section;// this calls out the i.d. slice to be displayed in the computer
}

function string_method() {// this function lets a  computer display a number as a string
    var X = 155;
    document.getElementById("Numbers").innerHTML = X.toString();
}

function precision_method() {// this function displays the precise number of numbers to display and round it up to the nearest decimal point.
    var X = 9999.775652623552353255;
    document.getElementById("Precision").innerHTML = X.toPrecision(7);// this calls out the i.d. presicion to display the first seven numbers rounding up the last number
}