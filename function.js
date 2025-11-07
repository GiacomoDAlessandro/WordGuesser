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

function buttonClicked() {

}