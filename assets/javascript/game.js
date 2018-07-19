var wins = 0;
var losses = 0;
var undArray = [];


var wordBank = {
    wordOne : ["p", "e", "p", "p", "e", "r", "o", "n", "i"],
    wordTwo : ["s", "a", "r", "d", "i", "n", "e", "s"] ,
    wordThree : ["b", "a", "c", "o", "n"] ,
    wordFour : ["o", "l", "i", "v", "e", "s"] ,
    wordFive : ["m", "u", "s", "h", "r", "o", "o", "m", "s"] ,
    wordWipe: function(wone) {
        for (i = 0; i < wone.length; i++) {
            undArray.push("_");           
        }
        return undArray;
    }

}

var underscores = [wordBank.wordWipe(wordBank.wordOne)];

console.log(underscores);