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

}