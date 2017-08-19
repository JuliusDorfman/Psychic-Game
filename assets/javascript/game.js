var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var game = {};
init();
var numWrong = 0;
var guessesRemaining = 10;
var winCounter = 0;
var lossCounter = 0;

function init() {
    game = {};
    console.log('', "Game is running");
    resetGuess();
    setRandomLetter();
    document.onkeyup = onUserInput;
    resetlistLettersGuessed();

}

function onUserInput(e) {
    var userInput = e.key;
    if (alphabet.indexOf(userInput) === -1) {
        console.log('', 'Please choose a letter');
        return;
    }

    var userChoice = document.getElementById('user-input');
    userChoice.innerHTML = userInput;

    if (userInput === game.letter) {
        alert("Yer a Wizerd, 'Arry!");
        resetWrongCounter();
        resetGuessesRemaining();
        funWinCounter();
        init();
    } else {
        wrongCounter();
        wrongGuesses();
    }
    if (guessesRemaining > 0) {
        listLettersGuessed(userInput);
    }

    if (guessesRemaining == 0) {
        alert('Go back to Hogwarts');
        resetWrongCounter();
        resetGuessesRemaining();
        funLossCounter();
        resetlistLettersGuessed();
        init();
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
    console.log('guesses-remaining set to:', guessesRemaining);
    document.getElementById('guesses-remaining').innerHTML = guessesRemaining;
}

function listLettersGuessed(userInput) {
    console.log('', userInput);
    game.listUserInput = (game.listUserInput || '') + userInput + (', ' || ' ');
    document.getElementById('letters-guessed').innerHTML = game.listUserInput;
}

function resetlistLettersGuessed() {
    game.listLettersGuessed = " ";
    document.getElementById('letters-guessed').innerHTML = game.listLettersGuessed;
}
// please explain in english what is happening *scope*? if I put "game." and/or "var" before my numWong and guessesRemaining variables

function funWinCounter() {
    winCounter += 1;
    document.getElementById('win-number').innerHTML = winCounter;
}

function funLossCounter() {
    lossCounter += 1;
    document.getElementById('loss-number').innerHTML = lossCounter;
}

function resetGuess() {
    var clearSpace = ' ';
    document.getElementById('user-input').innerHTML = clearSpace;
}

// UNUSED HANG-MAN CODE:

// function listLettersGuessed(e) {
//     var userLettersGuessed = e.key;
//     document.getElementById('letters-guessed').innerHTML = userLettersGuessed;
// if (userLettersGuessed! === arrayLettersGuessed) {
// //             document.write =userLettersGuessed;
// //         }
// // // }
// function checkLetters(event)
// {
//   var o = {};
//   for(var i=0;i<a.length;i++)
//   {
//     o[a[i]]='';
//   }
//   return o;
// }



// function chooseWord() {
// var random = Math.floor(Math.random() * arrayWordsToGuess.length) + 1;
// arrayWordsToGuess[random] = game.wordChoice
// }

// chooseWord();


// var arrayWordsToGuess = ['dog', 'cat', 'bird', 'turtle', 'crocodile', 'alligator', 'giraffe', 'snake', 'platypus', 'hippopotamus']
// var random = Math.floor(Math.random() * arrayWordsToGuess.length) + 1;
//

// function palindrome(word) {
//     return (word == word.split('').reverse().join(''));
// }