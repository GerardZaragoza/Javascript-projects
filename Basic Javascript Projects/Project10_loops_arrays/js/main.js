function call_loop() {
    var Digit = "";
    var X = 1;
    while (X < 100) {
        Digit +="<br>" + X;
        X++;
    }
    document.getElementById("loop").innerHTML = Digit;
}


var Instruments = ["guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop(){
    for (Y = 0; Y <Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_instruments").innerHTML = Content;
}

function array_function() {
    var mtg=[];
    mtg[0] = "pokemon";
    mtg[1] = "yu-gi-oh";
    mtg[2] = "flesh and blood";
    mtg[3] = "legend of the five rings";
    mtg[4] = "Magic";
    document.getElementById("Array").innerHTML = "i just want to play " + mtg[4] + ".";
}

let phone = {
    make: "Nokia ",
    model: "7110 ",
    year: "1999 ",
    colot: "metallic green ",
    description : function() {
        return "The Phone is a" + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Phone_object").innerHTML = phone.description() ;