var num_guesses = 5;

const fs = require('fs');

const data = fs.readFileSync('Words', 'utf8');

const wordsArray = data.split(/\s+/);

const wordsSet = new Set(wordsArray);


let GuessedWord = prompt("Guess");

if (wordsSet.has(GuessedWord)) {

} else {
    throw new Error("Make sure your guess is 5 letters long & is a real word!");
}

function buttonClicked() {

}