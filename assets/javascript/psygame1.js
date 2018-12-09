// declare variables
var wins = 0;
var losses = 0;
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lettersGuessed = [];
var guessesLeft = 10;
var letterSelect = alphabet[Math.floor(Math.random() * alphabet.length)];


// record player input, decreases guessesLeft by 1
document.onkeyup = function(event) {
    var playerGuess = event.key;
    guessesLeft--;
    document.getElementById("remaining").innerHTML = guessesLeft;

// exclude non letter keys and letters player has already guessed and return a guess
    if (alphabet.indexOf(playerGuess) < 0 || lettersGuessed.includes(playerGuess)) {
        guessesLeft++;
        document.getElementById("remaining").innerHTML = guessesLeft;
    } else {
        lettersGuessed.push(playerGuess);
        document.getElementById("letters").innerHTML = lettersGuessed;
    }
// if player guesses correctly wins increase by 1 and a new letter is chosen 
    if (playerGuess === letterSelect) {
        wins++;
        document.getElementById("win").innerHTML = wins;
        lettersGuessed = [];
        guessesLeft = 10;
        letterSelect = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
// if guesses reaches 0 losses increase by 1 and guesses left reset to 10 and reset lettersGuessed array
    if (guessesLeft === 0) {
        losses++;
        document.getElementById("loss").innerHTML = losses;
        guessesLeft = 10;
        lettersGuessed = [];
        letterSelect = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
}


