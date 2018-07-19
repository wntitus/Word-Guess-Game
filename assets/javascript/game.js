// declaring global wins and losses as well as creating an empty array to hold our underscores
// also creating alphabet array to make sure later the user is pressing a letter key

var wins = 0;
var losses = 0;
var undArray = [];
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var guessed = [];
var guessLeft = 12;

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

// creating a function to choose a random word from the wordbank array

randWord = function(arr) {
    var rando = arr[Math.floor(Math.random() * arr.length)];
    return rando;
}

// creating a function to take a string and split it into an array where each letter is an index

splitWord = function(target) {
    var randoTwo = target.split("");
    return randoTwo;
}

resetGame = function() {
    undArray = [];
    pcChoiceInit = randWord(wordBank);
    pcChoice = splitWord(pcChoiceInit);
    undWord = wordWipe(pcChoice);
    guessLeft = 12;
    guessed = [];
}

// getting a starting word for the computer before key press 
var pcChoiceInit = randWord(wordBank);
console.log("PC CHOSE " + pcChoiceInit);

var pcChoice = splitWord(pcChoiceInit);
console.log("THIS SHOULD BE AN ARRAY OF THE LETTERS " + pcChoice);

// creating underscores array before key press 
var undWord = wordWipe(pcChoice);
console.log("THIS SHOULD BE ALL UNDERSCORES " + undWord);




document.onkeyup = function(event) {


    console.log("THE USER PRESSED " + event.key);

    // checking to make sure the user pressed a letter

    if (alpha.includes(event.key)) {
        var input = event.key;
        var userGuess = input.toLowerCase();
        guessed.push(event.key);
    }


    if (pcChoice.includes(userGuess)) {
        for(i = 0; i < pcChoice.length; i++) {
            var choiceIndex = pcChoice.indexOf(userGuess);
            if (choiceIndex > -1) {
                delete pcChoice[choiceIndex];
                undWord.splice(choiceIndex, 1, userGuess);
                console.log(undWord + " loop " + i);
                console.log(pcChoice + " loop " + i);
            }           
        }
    }

    if (pcChoice.includes(userGuess) == false) {
        guessLeft--;
    }

    if (undWord.includes("_") == false) {
        wins++
        alert("You've won!!!! The word was " + undWord + " The game has been reset.");
        resetGame();
    }

    if (guessLeft == 0) {
        losses++ 
        alert("You've lost!!! The game has been reset.");
        resetGame();
    }


    var gameBody = 
        "<p>You have: " + guessLeft + " guesses left.</p>" +
        "<p>You've won: " + wins + " times.</p>" +
        "<p>You've lost: " + losses + " times.</p>" +
        "<br><br><br>" +
        "YOUR WORD TO GUESS: "  + undWord + 
        "<br><br>" + 
        "You've guessed these letters: " + guessed;

    
    
    document.querySelector("#startBody").innerHTML = gameBody;


}

