var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var game = {};

var firstRun = true;

//call function init
init();
var numWrong = 0;
var guessesRemaining = 10;
//defined function init. prints in console log, "Game is running". Call function setRandomNumber.
// finally will print user choices on page onUserInput
function init() {
    console.log('', "Game is running");
    setRandomLetter();
    document.onkeyup = onUserInput;
}
//function onUserInput event*e*. key,'key'(as seen in dev tools) of variable userInput event 'e'.
//also prevents user from entering a key outside of array
function onUserInput(e) {
    var userInput = e.key;
    if (alphabet.indexOf(userInput) === -1) {
        console.log('invalid input', 'please use a letter');
        return;
    }

    var userChoice = document.getElementById('user-input');
    userChoice.innerHTML = userInput;

    if (userInput === game.letter) {
        alert("Good Job");
        resetWrongCounter();
        resetGuessesRemaining();
        firstRun = false;
        init();
    } else {
        wrongCounter();
        wrongGuesses();
        if (guessesRemaining == 0) {
            alert('Go back to Hogwarts');
            resetWrongCounter();
            resetGuessesRemaining();
            init();
        }
    }
}

function setRandomLetter() {
    var randNum = Math.random() * 26;
    var randInt = Math.floor(randNum);
    game.letter = alphabet[randInt];
    console.log('game picked:', game.letter);

    var gameChoice = document.getElementById('game-letter');
    gameChoice.innerHTML = game.letter;
}

function wrongCounter() {
    numWrong += 1;
    console.log('Number of wrong guesses:', numWrong);
    document.getElementById('wrong-counter').innerHTML = numWrong;
}


function resetWrongCounter() {
    numWrong = 0;
    console.log('Wrong counter set to:', numWrong);
    document.getElementById('wrong-counter').innerHTML = numWrong;
}

function wrongGuesses() {
    guessesRemaining -= 1;
    console.log('guesses-remaining', guessesRemaining);
    document.getElementById('guesses-remaining').innerHTML = guessesRemaining;
}

function resetGuessesRemaining() {
    guessesRemaining = 10;
    console.log('guesses-remaining set to', guessesRemaining);
    document.getElementById('guesses-remaining').innerHTML = guessesRemaining;
}


// please explain in english what is happening *scope*? if I put "game." and/or "var" before my numWong and guessesRemaining variables


// function listLettersGuessed(e) {
//     var userLettersGuessed = e.key;
//     document.getElementById('letters-guessed').innerHTML = lettersGuessed;
//     console.log(lettersGuessed);
// }

// listLettersGuessed();