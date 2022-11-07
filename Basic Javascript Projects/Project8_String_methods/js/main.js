function full_sentence() {
    var part_1 = "I casted";
    var part_2 = " Wrath of god";
    var part_3 = " Destroy All Creatures.";
    var part_4 = " Boom!";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}

function slice_method (){
    var Sentence = "The Toronto EDH Club.";
    var Section = Sentence.slice(4,12);
    document.getElementById("slice").innerHTML = Section;
}

function string_method() {
    var X = 155;
    document.getElementById("Numbers").innerHTML = X.toString();
}

function precision_method() {
    var X = 9999.775352623552353255;
    document.getElementById("Precision").innerHTML = X.toPrecision(7);
}