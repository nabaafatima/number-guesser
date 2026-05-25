let number = Math.floor(Math.random() * 100) + 1;
let count = 0;
function hints() {
    let user = Number(document.getElementById("guess").value);
    const hint = document.getElementById("hint");
    count = count + 1;
    const tries = document.getElementById("tries");
    tries.textContent = count;
    if (number == user) {
        alert("YOU GUESSED IT RIGHT!");
        number = Math.floor(Math.random() * 100) + 1;
        count = 0;
        tries.textContent = count;
        hint.textContent = ""; 
    }
    else if (count >= 7) {
        alert("YOU HAVE RUN OUT OF TRIES");
        number = Math.floor(Math.random() * 100) + 1;
        count = 0;
        tries.textContent = count;
        hint.textContent = "";
    } 
    else if (number < user) {
        hint.textContent = "YOUR GUESS IS HIGHER THAN THE NUMBER!";
    } else if (number > user) {
        hint.textContent = "YOUR GUESS IS LESS THAN THE NUMBER!";
    }
}
start.addEventListener('click', hints);



