const PauseTime = 333;
const  nextWaitTime = 1000;

var pattern = [];
var progress = 0;
var gamePlaying = false;
var guessCounter = 0;

// funktio, joka generoi satunnaiset luvut
function getRandomInt(min, max) {
    return Math.floor(Math.random()* (max - min + 1)) + min;
}

// funktio, joka täyttää (patter) satunnaisilla numeroilla
function generateRandomPattern(length) {
    pattern = [];
    for (let i = 0; i < length; i++) {
        pattern.push(getRandomInt(1,4)); //valitsee satunnaisen numeron 1 ja 4 välillä
    }
}

//--------------------------------

function startGame() {
    progress = 0; 
    gamePlaying = true;

    // tämä generoi satunnaisen laskun, kunnes pelaaja on saanut pelattua 8 tasoa.
generateRandomPattern(8);

document.getElementById("start-button").classList.add("hidden");
document.getElementById("stop-button").classList.remove("hidden");
playClueSequence();
}

function stopGame() {
    progress = 0;
    gamePlaying = false;

    document.getElementById("start-button").classList.add("hidden");
    document.getElementById("stop-button").classList.remove("hidden");

}

// seuraava funktio valaisee painikkeet ja samuttaa ne
function lightButton(btn) {
    document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {

document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
    if (gamePlaying) {
      lightButton(btn);
      setTimeout(clearButton, cluePauseTime, btn);
    }
  }
  