var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
var game = {};

init();



function init() {
    console.log('', "Game is running");
    setRandomLetter();
    document.onkeyup = function(e) {
        var userInput = e.key;
        var elem = document.getElementById('user-input');
        elem.innerHTML = userInput;
    }
}

function setRandomLetter() {
    var randNum = Math.random() * 9;
    var randInt = Math.floor(randNum);
    game.letter = alphabet[randInt];
    console.log('game picked:', game.letter);

    var elem = document.getElementById('game-letter');
    elem.innerHTML = game.letter;
}