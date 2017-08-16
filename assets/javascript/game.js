var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var game = {};
var numWrong = 0;
var firstRun = true;
//call function init
init();


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

    var elem = document.getElementById('user-input');
    elem.innerHTML = userInput;
    if (userInput === game.letter) {
        alert("Good Job");
        firstRun = false;
        resetWrongCounter();   
        init();
    } else {
        wrongCounter();
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
    var numWrong = 0;
    console.log('Wrong counter set to:', numWrong);
    document.getElementById('wrong-counter').innerHTML = numWrong;
}