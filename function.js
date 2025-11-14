let words = [];
let wordToGuess = "";
fetch('Words')
    .then(res => res.text())
    .then(data => {
        words = data.split('\n').map(word => word.trim());
        wordToGuess = "apple";
            //words[Math.floor(Math.random() * words.length)];
        console.log(wordToGuess);
    })
    .catch(err => console.error("Error loading words:", err));

let turns = 0;

document.addEventListener('DOMContentLoaded', function () {


    const bigBox = document.querySelector(".big-box");

    for (let i = 0; i < 6; i++) {
        const row = document.createElement("div");
        row.className = "guess-row"

        for (let j = 0; j < 5; j++) {
            const box = document.createElement("div");
            box.className = "past-letter-box";
            row.appendChild(box);
        }

        bigBox.appendChild(row);
    }

    document.querySelectorAll('.letter-box').forEach((box, index, boxes) => {
        box.addEventListener('input', (e) => {
            if (box.value.length === 1 && index < boxes.length - 1) {
                boxes[index + 1].focus();
            }
        })

        box.addEventListener('keydown', (e) => {

            if (e.key === 'Enter') {
                buttonClicked();
            }

            if (e.key === 'Backspace' || e.key === 'Delete' ||
                e.key === 'Tab' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {

                if (e.key === 'Backspace' && box.value === '' && index > 0) {
                    boxes[index - 1].focus();
                }
                return;
            }
            if (!/^[a-zA-Z]$/.test(e.key)) {
                e.preventDefault();
            }
        })
    })
})


const input = document.querySelector("input");


function buttonClicked() {
    if (turns < 6) {
        let wordGuessed = [...document.querySelectorAll('.letter-box')]
            .map(box => box.value)
            .join('');

        try {
            //Check word is 5 letters long
            if (wordGuessed.length !== 5) {
                throw Error("Word must be 5 letters long!");
            }
            //increment the turns if the word is valid
        } catch (error) {
            //Throw alert is word is not in a valid form
            alert("Error: " + error.message);
            return;
        }

        const rows = document.querySelectorAll('.guess-row')[turns];
        const boxes = rows.querySelectorAll('.past-letter-box');
        for (let i = 0; i < 5; i++) {
            boxes[i].textContent = wordGuessed[i];
        }

        turns++

        if (wordGuessed.toLowerCase() === wordToGuess.toLowerCase()) {
            const correctWordPop = document.getElementById('correctWordCongrats');
            correctWordPop.textContent = "Correct!";
            correctWordPop.style.display = "block";

            setTimeout(() => {
                correctWordPop.style.display = "none";
            }, 5000);

            for (let i = 0; i < 5; i++) {
                boxes[i].style.backgroundColor = "green";
            }

            document.querySelectorAll('.letter-box').forEach(box => {
                box.disabled = true;
            })
        } else {
            for (let i = 0; i < wordGuessed.length; i++) {
                if (wordGuessed[i].toLowerCase() === wordToGuess[i].toLowerCase()) {
                    boxes[i].style.backgroundColor = "green";
                } else {
                   for (let j = 0; j < wordToGuess.length; j++) {
                       if (wordGuessed[i].toLowerCase() === wordToGuess[j].toLowerCase()) {
                           boxes[i].style.backgroundColor = "yellow";
                       }
                   }
                }
            }
        }
    } else {
        document.querySelectorAll('.letter-box').forEach(box => {
            box.disabled = true;

        })
    }
}

