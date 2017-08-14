var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var game = {};

init();

function init() {
    console.log('', "Game is running");
    setRandomLetter();
    document.onkeyup = onUserInput;
}

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
        init();
    } else {
        console.log("Guess Again");
    }
}

function setRandomLetter() {
    var randNum = Math.random() * 26;
    var randInt = Math.floor(randNum);
    game.letter = alphabet[randInt];
    console.log('game picked:', game.letter);

    var elem = document.getElementById('game-letter');
    elem.innerHTML = game.letter;
}