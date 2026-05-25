const number = Math.floor(Math.random() * 100) + 1;
let count = 0;
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
    count = count + 1;
    const tries = document.getElementById("tries");
    tries.textContent = count;
}
start.addEventListener('click', hints);



