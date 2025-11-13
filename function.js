let words = [];
fetch('Words')
    .then(res => res.json())
    .then(data => {
        lines = data.split('\n');
    })
    .catch(err => console.error("Error loading words:", err));

wordToGuess = words[Math.floor(Math.random() * words.length)];

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
        box.addEventListener('input', () => {
            if (box.value.length === 1 && index < boxes.length - 1) {
                boxes[index + 1].focus();
            }
        })

        box.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && box.value === '' && index > 0) {
                boxes[index - 1].focus();
            }
        })
    })
});


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

        if (wordGuessed === wordToGuess) {

        }
    }
}

