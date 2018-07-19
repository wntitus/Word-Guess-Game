// declaring global wins and losses as well as creating an empty array to hold our underscores
// also creating alphabet array to make sure later the user is pressing a letter key




var wins = 0;
var losses = 0;
var undArray = [];
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// creating wordBank object that has our words and a method to take the words and fill our underscore array with the 
// correct amount of underscores

var wordBank = {
    wordOne : ["p", "e", "p", "p", "e", "r", "o", "n", "i"],
    wordTwo : ["s", "a", "r", "d", "i", "n", "e", "s"] ,
    wordThree : ["b", "a", "c", "o", "n"] ,
    wordFour : ["o", "l", "i", "v", "e", "s"] ,
    wordFive : ["m", "u", "s", "h", "r", "o", "o", "m", "s"] ,

}

wordWipe = function(wone) {
    for (i = 0; i < wone.length; i++) {
        undArray.push("_");           
    }
    return undArray;
}

document.onkeyup = function(event) {

    console.log("THE USER PRESSED " + event.key);
}

var underscores = wordWipe(wordBank.wordOne);

console.log(underscores);