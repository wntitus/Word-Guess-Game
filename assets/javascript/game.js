// declaring global wins and losses as well as creating an empty array to hold our underscores
// also creating alphabet array to make sure later the user is pressing a letter key

var wins = 0;
var losses = 0;
var undArray = [];
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var guessed = [];
var pcChoice;

// creating wordBank object that has our words 


var wordBank = {
    wordOne : ["p", "e", "p", "p", "e", "r", "o", "n", "i"],
    wordTwo : ["s", "a", "r", "d", "i", "n", "e", "s"] ,
    wordThree : ["b", "a", "c", "o", "n"] ,
    wordFour : ["o", "l", "i", "v", "e", "s"] ,
    wordFive : ["m", "u", "s", "h", "r", "o", "o", "m", "s"] 

}

// this will create an array of the wordBank items and gets the length so we can use it later for any loops 
// and to get random words

var wordBankSize = Object.keys(wordBank).length;

var wordBankArr = Object.keys(wordBank);

console.log(wordBankSize);

// creating a function to create an underscore array with the correct amount of underscores for each word

wordWipe = function(wone) {
    for (i = 0; i < wone.length; i++) {
        undArray.push("_");           
    }
    return undArray;
}

document.onkeyup = function(event) {

    console.log("THE USER PRESSED " + event.key);

    // checking to make sure the user pressed a letter

    if (alpha.includes(event.key)) {
        var userGuess = event.key;
        guessed.push(event.key);
    }

    chooseWord = function() {
        pcChoice = wordBank['wordBankArr[Math.floor(Math.random() * wordBankSize)]'];
    }

    console.log("HOPEFULLY THE PC CHOSE " + pcChoice);


}

var underscores = wordWipe(wordBank.wordOne);

console.log(underscores);