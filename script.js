const number = Math.floor(Math.random() * 100) + 1;
function hints() {
    let user = Number(document.getElementById("guess").value);
    const hint = document.getElementById("hint");
    if (number > user) {
        hint.textContent = "YOUR GUESS IS LESS THAN THE NUMBER!";
    } else if (number < user) {
        hint.textContent = "YOUR GUESS IS HIGHER THAN THE NUMBER!";
    } else {
        hint.textContent = "YOU GUESSED IT RIGHT!";
    }
}
start.addEventListener('click', hints);



