// declaring global wins and losses as well as creating an empty array to hold our underscores
// creating alphabet array to make sure later the user is pressing a letter key
// also creating guessed array to hold guessed letters and the amount of guesses left

var wins = 0;
var losses = 0;
var undArray = [];
let alphaCheck = /[a-z]/
var guessed = [];
var guessLeft = 10;

// creating wordBank array that has our words 


var wordBank = [
    "pepperoni",
    "olives",
    "mushrooms",
    "bacon",
    "sardines",
    "meatballs",
    "salami",
    "peppers", 
    "onions",
    "chicken",
    "ham", 
    "pineapple", 
    "tomatoes"
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

// creating a function to reset the game after a win or loss

resetGame = function() {
    undArray = [];
    pcChoiceInit = randWord(wordBank);
    pcChoice = splitWord(pcChoiceInit);
    undWord = wordWipe(pcChoice);
    guessLeft = 10;
    guessed = [];
}

// getting a starting word for the computer before key press 

var pcChoiceInit = randWord(wordBank);


// splitting starting word into an array of individual letters to make it easier to push into the underscore array so that
// the proper correct guesses are displayed

var pcChoice = splitWord(pcChoiceInit);


// creating underscores array before key press 

var undWord = wordWipe(pcChoice);


// main game logic begins after user presses a key

document.onkeyup = function(event) {




    // if user already guessed a letter, an alert will show and no guesses will be removed

    if (guessed.includes(event.key)) {
        alert("You already guessed that!");
    }

    // checking to make sure user pressed a letter

    if (alphaCheck.test(event.key) && guessed.includes(event.key) == false) {
        var input = event.key;
        var userGuess = input.toLowerCase();
        guessed.push(event.key);
    }

    // if the computer choice doesn't have the user guess in it, the user loses a guess

    if (pcChoice.includes(userGuess) == false) {
        guessLeft--;
    }

    // checking to see if the computer choice has a letter in it that the user picked, if so the pc choice is iterated over
    // and the index of the user's letter is stored so that the letter can be removed from the computer choice and added
    // to our displayed letters (in this case the array of underscores functions as our display)
    //
    // the user's letter is removed from the computer choice array so that unintended behavior does not happen for
    // words with the same letter multiple times

    if (pcChoice.includes(userGuess)) {
        for(i = 0; i < pcChoice.length; i++) {
            var choiceIndex = pcChoice.indexOf(userGuess);
            if (choiceIndex > -1) {
                delete pcChoice[choiceIndex];
                undWord.splice(choiceIndex, 1, userGuess);

            }           
        }
    }



    // if the displayed letters no longer have any underscores (meaning the user has found all the letters), the game ends
    // and the user gains a win, then the game resets

    if (undWord.includes("_") == false) {
        wins++
        var finalWord = undWord.join("");
        alert("You've won!!!! The word was: " + finalWord + ". The game has been reset.");
        resetGame();
    }

    // if the user runs out of guesses, the user gains a loss and the game resets

    if (guessLeft == 0) {
        losses++ 
        alert("You've lost!!! The game has been reset.");
        resetGame();
    }




    // making it so our displayed empty word doesn't have commas and looks nice

    var displayJoined = undWord.join("     ");

    // setting our game contents to a variable
    
    var gameBody = 
        "<p id = 'guessTag' class = 'border-bottom border-dark pb-3'>You have: " + guessLeft + " guesses left.</p>" +
        "<p class = 'border-bottom border-dark pb-3'>You've won: " + wins + " times.</p>" +
        "<p class = 'border-bottom border-dark pb-3'>You've lost: " + losses + " times.</p>" +
        "<h4 class = 'text-muted mt-5'>What do I want on my pizza....?</h4>" + 
        "<br><br><br>" +
        "<h3 class = 'bg-primary p-4 border border-dark rounded'>YOUR WORD TO GUESS: "  + displayJoined + "</h3>" +
        "<br><br>" + 
        "<p class = 'bg-secondary p-3 border border-dark rounded'>You've guessed these letters: " + guessed + "</p>";

    
    // updates the HTML of our main body div with the correct stats and HTML

    document.querySelector("#startBody").innerHTML = gameBody;

    // this will add a danger styling to the guesses left when the user reaches 3 left

    if (guessLeft <= 3) {
        var warning =
            "<p class = 'border border-dark p-3 bg-danger'>You have: " + guessLeft + " guesses left.</p>";
        document.querySelector("#guessTag").innerHTML = warning;

    }




}

