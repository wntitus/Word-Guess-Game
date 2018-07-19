// declaring global wins and losses as well as creating an empty array to hold our underscores
// also creating alphabet array to make sure later the user is pressing a letter key

var wins = 0;
var losses = 0;
var undArray = [];
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var guessed = [];
var guessLeft = 6;

// creating wordBank object that has our words 


var wordBank = [
    "pepperoni",
    "olives",
    "mushrooms",
    "bacon",
    "sardines"
];



// creating a function to create an underscore array with the correct amount of underscores for each word

wordWipe = function(wone) {
    for (i = 0; i < wone.length; i++) {
        undArray.push("_");           
    }
    return undArray;
}

randWord = function(object) {
    var result ;
    var counter = 0;
    for(var property in object) {
        if (Math.random() < 1/++count) {
            result = property;
        }
        return result;
    }
}




document.onkeyup = function(event) {


    console.log("THE USER PRESSED " + event.key);

    // checking to make sure the user pressed a letter

    if (alpha.includes(event.key)) {
        var input = event.key;
        var userGuess = input.toLowerCase();
        guessed.push(event.key);
    }













    var gameBody = 
        "<p>You have: " + guessLeft + " guesses left.</p>" +
        "<p>You've won: " + wins + " times.</p>" +
        "<p>You've lost: " + losses + " times.</p>" +
        "<br><br><br>" +
        "YOUR WORD TO GUESS: "  /*VARIABLE HERE!!!!!!!!*/ + 
        "<br><br>" + 
        "You've guessed these letters: " + guessed;

    
    
    document.querySelector("#startBody").innerHTML = gameBody;








}

var underscores = wordWipe(wordBank.wordOne);

console.log(underscores);